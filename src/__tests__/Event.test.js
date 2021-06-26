import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event'
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
        let EventWrapper;
        beforeAll(() => {
            EventWrapper = shallow(<Event eventData={mockData[0]} />);
        });

        test('render event', () =>{
            expect(EventWrapper.find('.event')).toHaveLength(1);
        });

        test('render eventSummary', () =>{
            expect(EventWrapper.find('.eventSummary')).toHaveLength(1);
        });

        test('render eventLocation', () =>{
            expect(EventWrapper.find('.eventLocation')).toHaveLength(1);
        });

        test('show details button is rendered', () =>{
            expect(EventWrapper.find('.details-btn')).toHaveLength(1);
        });

        test('change showDetails state on showDetailsClick', () => {
            EventWrapper.setState({
              showDetails: false,
            });
            EventWrapper.find('.details-btn').simulate('click');
            expect(EventWrapper.state('showDetails')).toEqual(true);
          });

        test('change showDetails state on hideDetailsClick', () => {
            EventWrapper.setState({
                showDetails:true,
            });
            EventWrapper.find('.hideDetailsButton').simulate('click');
            expect(EventWrapper.state('showDetails')).toEqual(false);
        });

        test('render eventDescription when state is true', () =>{
            EventWrapper.setState({
                showDetails: true,
            });
            expect(EventWrapper.find('.eventDescription')).toHaveLength(1);
        });

        test('dont render eventDescription when state is flase', () =>{
            EventWrapper.setState({
                showDetails: false,
            });
            expect(EventWrapper.find('.eventDescription')).toHaveLength(0);
        });


});