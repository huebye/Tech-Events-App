import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import NumberOfEvents from './NumberOfEvents';
import CitySearch from './CitySearch';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import { WarningAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';


class App extends Component {

  state = {
    events: [], //fetched in getEvents() in api.js
    locations: [],
    NumberOfEvents: 32, //max number of events that can be displayed
    currentCity: 'all', // display all cities and events.
    warningText: null,
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
    const { NumberOfEvents } = this.state;
    this.mounted = true;
    if (!navigator.onLine) {
      this.setState({
        warningText: 'Please go online to see the updated Content, you are currently seeing stored content of your last session!'
      });
    }
    else {
      this.setState({
        warningText: ''
      })
    }
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false :
    true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
    getEvents().then((events) => {
    if (this.mounted) {
      this.setState({ events : events.slice(0, NumberOfEvents), locations: extractLocations(events) });
    }//limits events to the NumberOfEvents state
    });
    }
    }

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
    if (this.state.showWelcomeScreen === undefined) return <div
className="App" />
    return (
      <div 
      className="App">
        <div className="navbar"><h1>TECH EVENTS</h1></div>
        <WarningAlert text={this.state.warningText} />
        <CitySearch numberOfEvents={this.state.NumberOfEvents} locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateNumberOfEvents={this.updateNumberOfEvents}/>
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
        getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;