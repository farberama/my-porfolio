import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const myExample = {
    'title': 'Work Example 1',
    'href': 'https://example.com',
    'desc': 'Adipisicing labore tempor Lorem commodo irure veniam dolor ad duis et qui exercitation consectetur enim. Laboris et ex excepteur consequat laborum proident cupidatat. Velit non sit commodo eiusmod sit Lorem amet deserunt. Nisi deserunt non elit nulla nulla ut laboris. Fugiat enim exercitation duis eiusmod deserunt ea do anim.',
    'image': {
        'desc': 'example screenshot of a project involving code',
        'src': 'images/example1.png',
        'comment': ''
    }
};

describe('ExampleWorkModal component', () => {
    let component = shallow(<ExampleWorkModal example={myExample}
        open = {false}/>);
    let openComponent = shallow(<ExampleWorkModal example={myExample}
        open = {true}/>);    
    let anchors = component.find('a');

    it('should contain a single a tag', () => {
        expect(anchors.length).toEqual(1);
    });

    it('should link to our project', () => {
        expect(anchors.getElement().props.href).toEqual(myExample.href);
    });

    it('should have the modal call set correctly', () => {
        expect(component.find('.background--skyBlue').hasClass('modal--closed')).toBe(true); 
        expect(openComponent.find('.background--skyBlue').hasClass('modal--open')).toBe(true);
    })
})