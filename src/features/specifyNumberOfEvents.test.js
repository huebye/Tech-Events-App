import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';



const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppWrapper;
    let NumberOfEventsWrapper;
    test('When user hasn’t specified a number, 32 event items is the default number.', ({ given, when, then }) => {
    	given('the list of events has been loaded', () => {
            AppWrapper = mount(<App />);
    	});

    	when('user does not change the number of event items being displayed', () => {
            
    	});

    	then('the default number of items displayed will be 32', () => {
            expect(AppWrapper.state('NumberOfEvents')).toBe(32);
    	});
    });


    test('User can change the number of events they want to see.', ({ given, when, then }) => {
    	given('the list of events has been loaded', () => {
            AppWrapper = mount(<App />);
            NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfEvents={() => { }} />);
    	});

    	when('user changes the number of events being displayed to as many as they want to see', () => {
            NumberOfEventsWrapper.find('.numberOfEventInput').simulate('change', { target: { value: 2 } });
    	});

    	then('list of events seen will be reduced to the amount chosen', () => {
            expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(2);
    	});
    });
});