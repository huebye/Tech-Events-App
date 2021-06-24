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
          <div className="eventElement">
              <h1 className="eventSummary">{eventData.summary}</h1>
              <h2 className="eventLocation">{eventData.location}</h2>
              <h3 className="eventStatus">{eventData.status}</h3>
              {this.state.showDetails === true && (
                  <h4 className="eventDescription">{eventData.description}</h4>
              )}
              {this.state.showDetails === false && (
                  <button className="showDetailsButton" onClick={() => this.handleShowDetails()}>
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