import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Event from '../Event';
import EventList from '../EventList';
import App from '../App';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

const locations = extractLocations(mockData);

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    let AppWrapper;
    let EventListWrapper;
    let EventWrapper;
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        given('the list of events has been loaded', () => {
            AppWrapper = mount(<App />);
            EventListWrapper = shallow(<EventList events={mockData} />);
            EventWrapper = shallow(<Event eventData={mockData[0]} />);
    	});

    	when('the user has not made any action', () => {
            AppWrapper = mount(<App />)
    	});

    	then('the event element will be collapsed', () => {
        expect(EventWrapper.find('.eventDescription')).toHaveLength(0);
    	});
    });


    test('User can expand an event to see its details', ({ given, when, then }) => {
    	given('the list of events has been loaded', () => {
            AppWrapper = mount(<App />);
            EventListWrapper = shallow(<EventList events={mockData} />);
            EventWrapper = shallow(<Event eventData={mockData[0]} />);
    	});

    	when('the user clicks on the event', () => {
            EventWrapper.find('.details-btn').simulate('click');
    	});

    	then('the event element expands', () => {
            expect(EventWrapper.find('.eventDescription')).toHaveLength(1);
    	});
    });


    test('User can collapse an event to hide the details', ({ given, and, when, then }) => {
    	given('the list of events has been loaded', () => {
            AppWrapper = mount(<App />);
            EventListWrapper = shallow(<EventList events={mockData} />);
            EventWrapper = shallow(<Event eventData={mockData[0]} />);
    	});

    	and('the element has been expanded', () => {
            EventWrapper.setState({ showDetails: true});
    	});

    	when('user clicks on “hide details”', () => {
            EventWrapper.find('.hideDetailsButton').simulate('click');
    	});

    	then('the event element collapses', () => {
            expect(EventWrapper.find('.eventDescription')).toHaveLength(0);
    	});
    });
});