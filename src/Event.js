import React, { Component } from 'react';

class Event extends Component {
    state = {
        showDetails: false,
      };

    handleShowDetails = () => {

        this.setState({showDetails: true});
    };

    handleCloseDetails = () => {
        this.setState({showDetails: false});
    };

  render() {
    const { eventData } = this.props
    return (
      <div>
          <div className="event">
              <h1 className="eventSummary">{eventData.summary}</h1>
              <h3 className="eventLocation">{eventData.location}</h3>
              <h4 className="eventtime">Start: {eventData.start.dateTime.substr(0,10)} Time: {eventData.start.dateTime.substr(11,5)} <br />
               End: {eventData.end.dateTime.substr(0,10)} Time: {eventData.end.dateTime.substr(11,5)}
               </h4>
              {this.state.showDetails === true && (
                  <h5 className="eventDescription">{eventData.description}</h5>
              )}
              {this.state.showDetails === false && (
                  <button className="details-btn" onClick={() => this.handleShowDetails()}>
                      Show Details
                  </button>
              )}
              {this.state.showDetails === true && (
                  <button className="hideDetailsButton" onClick={() => this.handleCloseDetails()}>
                      Hide Details
                  </button>
              )}
          </div>
      </div>
    );
  }
}

export default Event;