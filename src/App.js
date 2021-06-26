import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import NumberOfEvents from './NumberOfEvents';
import CitySearch from './CitySearch';
import { getEvents, extractLocations } from './api';
import './nprogress.css';


class App extends Component {

  state = {
    events: [], //fetched in getEvents() in api.js
    locations: [],
    NumberOfEvents: 32, //max number of events that can be displayed
    currentCity: 'all' // display all cities and events.
  }

  componentDidMount() {
    const { NumberOfEvents } = this.state;
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events : events.slice(0, NumberOfEvents), locations: extractLocations(events) });
      }
      //limits events to the NumberOfEvents state
    });
  };

  //update events with parametar location and numberOfEvents to be displayed 
  updateEvents = (location, NumberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events.slice(0, NumberOfEvents) : 
        events.filter((event) => event.location === location);
        if (this.mounted) {
          this.setState({
            events: locationEvents.slice(0, NumberOfEvents),
            currentCity: location 
          });
        };
    });
  }

  // send props to NumberOfEvents component and retrieve changed value.
  updateNumberOfEvents = (numberOfEvents) => {
    this.setState({ 
      NumberOfEvents: numberOfEvents
    });
    const { currentCity } = this.state
    this.updateEvents(currentCity, numberOfEvents);
  };


  componentWillUnmount(){
    this.mounted = false;
  };

  render() {
    return (
      <div 
      className="App">
        <div className="navbar"><h1>TECH EVENTS</h1></div>
        <CitySearch numberOfEvents={this.state.NumberOfEvents} locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateNumberOfEvents={this.updateNumberOfEvents}/>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;