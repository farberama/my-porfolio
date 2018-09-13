import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
        'title': 'Work Example 1',
        'href': 'https://example.com',
        'desc': 'Adipisicing labore tempor Lorem commodo irure veniam dolor ad duis et qui exercitation consectetur enim. Laboris et ex excepteur consequat laborum proident cupidatat. Velit non sit commodo eiusmod sit Lorem amet deserunt. Nisi deserunt non elit nulla nulla ut laboris. Fugiat enim exercitation duis eiusmod deserunt ea do anim.',
        'image': {
            'desc': 'example screenshot of a project involving code',
            'src': 'images/example1.png',
            'comment': ''
        }
    },
    {
        'title': 'Work Example 2',
        'href': 'https://example.com',
        'desc': 'Esse nulla proident voluptate sit culpa velit. Sit aliquip eu tempor irure. Tempor proident exercitation proident qui aute eu duis commodo exercitation minim labore veniam dolore enim. Ullamco commodo pariatur quis nostrud veniam velit amet adipisicing cupidatat est veniam in. Aute commodo cillum ex labore irure eiusmod dolore sint aliquip voluptate.',
        'image': {
            'desc': 'example screenshot of a project involving chemestry',
            'src': 'images/example2.png',
            'comment': ''
        }
    },
    {
        'title': 'Work Example 3',
        'href': 'https://example.com',
        'desc': 'Est incididunt eiusmod non nostrud. Qui cillum officia dolor id incididunt consectetur amet. Lorem esse aliqua pariatur do amet pariatur do adipisicing dolor tempor anim laboris sunt. Velit cillum magna et est non incididunt pariatur ex minim aliquip enim quis. Eu esse incididunt veniam exercitation duis adipisicing anim aliquip adipisicing. Eiusmod do quis do magna incididunt adipisicing velit exercitation.',
        'image': {
            'desc': 'example screenshot of a project involving cats',
            'src': 'images/example3.png',
            'comment': ''
        }
    }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work')); 