import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import NumberOfEvents from './NumberOfEvents';
import CitySearch from './CitySearch';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import { WarningAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import EventGenre from './EventGenre'


class App extends Component {

  state = {
    events: [], //fetched in getEvents() in api.js
    locations: [],
    NumberOfEvents: 32, //max number of events that can be displayed
    currentCity: 'all', // display all cities and events
    warningText: null, //warns about online, offlne status
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

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
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
         <div className="data-vis-wrapper">
        <h3>Events in each city</h3>
        <ResponsiveContainer className="chart" height={400} >
          <ScatterChart className="chart" margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid />
            <XAxis type="category" dataKey="city" name="city" tick={{ fill: 'black' }}/>
            <YAxis
              allowDecimals={false}
              type="number"
              dataKey="number"
              name="number of events"
              tick={{ fill: 'black' }}
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter data={this.getData()} fill="#FF4D00" />
          </ScatterChart>
        </ResponsiveContainer>
         <div className="circle_diagram">
        <h4>Languages taught in our events</h4>
        <EventGenre  events={this.state.events} />
        </div>
        </div>
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
        getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App; 