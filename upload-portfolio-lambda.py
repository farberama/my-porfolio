import boto3
from botocore.client import Config
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:332596596428:portfolioDeployment')
    
    location = {
        "bucketName": "billfarberportfoliobuild",
        "objectKey": "portfoliobuild.zip"
    }
    
    
    try:
        job = event.get('CodePipeline.job')
        
        if job:
            for artifact in job["data"]["inputArtifacts"]:
                print str(artifact)
                if artifact["name"] == "MyAppBuild":
                    location = artifact["location"]["s3Location"]
                    
        print 'Building portfolio from ' + str(location)
        
        s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))
        
        portfolio_bucket = s3.Bucket('billfarberportfolio')
        build_bucket = s3.Bucket(location["bucketName"])
        
        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj(location['objectKey'], portfolio_zip)
        
        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm,
                    ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
                
        topic.publish(Subject="Portfolio Deployment", Message="Portfolio deployed successfully. location: " + str(location))
        print "SUCCESS!!! location: " + str(location)
        
        if job:
            codepipeline = boto3.client('codepipeline')
            codepipeline.put_job_success_result(jobID=job['id'])
        
    except:
        topic.publish(Subject="Portfolio Deployment Failed", Message="Portfolio deployment has failed. location: " + str(location))
        print "FAILED!!! location: " + str(location)
        raise
    
    return 'Hello from Lambda'