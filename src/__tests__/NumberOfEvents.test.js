import React from 'react';
import { shallow } from 'enzyme';
import NnumberOfEvents from '../NumberOfEvents';
import Event from '../Event'
import { mockData } from '../mock-data';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberWrapper;
    beforeAll(() =>{
        NumberWrapper = shallow(<NumberOfEvents />);
    });

    test('render textinput', () =>{
        expect(NumberWrapper.find('.numberOfEventInput')).toHaveLength(1)
    });

    test('render textlabel', () =>{
        expect(NumberWrapper.find('.numberOfEventsLabel')).toHaveLength(1)
    });

    test('render error message p element', () =>{
        expect(NumberWrapper.find('.errorMessageNumberInput')).toHaveLength(1)
    })

    test('return error message for numberOfEvents equal to 0', () =>{
        NumberWrapper.setState({
            numberOfEvents: ''
        });
        const eventObject = { target: { value: '0' }};
        NumberWrapper.find('.numberOfEventInput').simulate('change', eventObject)
        expect(NumberWrapper.state('error')).toEqual('Number must at least be 1')
    });

    test('return error message for numberOfEvents to be higher than 32', () =>{
        NumberWrapper.setState({
            numberOfEvents: ''
        });
        const eventObject = { target: { value: '33' }};
        NumberWrapper.find('.numberOfEventInput').simulate('change', eventObject)
        expect(NumberWrapper.state('error')).toEqual('Number can not be higher than 32')
    });

    test('return no errormessage when numberOfEvents is between 1-32', () =>{
        NumberWrapper.setState({
            numberOfEvents: ''
        });
        const eventObject = { target: { value: '32' }};
        NumberWrapper.find('.numberOfEventInput').simulate('change', eventObject)
        expect(NumberWrapper.state('error')).toEqual('')
    });
    
});

