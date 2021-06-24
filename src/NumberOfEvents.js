import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: '',
        error: ''
    }
    handleNumberInputChange = (event) => {
        const value = event.target.value;
        if (value < 1) {
            return this.setState({
                error: 'Number must at least be 1',
                numberOfEvents: ''
            });
        } else if (value > 32) {
            return this.setState({
                error: 'Number can not be higher than 32',
                numberOfEvents: ''
            })
        } else {
            this.setState({
              numberOfEvents: value,
              error: '',
            });
          }
    }

  render() {
    return (
      <div className="numberOfEvents">
          <label className="numberOfEventsLabel">Number of Events shown</label>
          <input 
          type="number"
          className="numberOfEventInput"
          value={this.state.numberOfEvents}
          placeholder="Type in number, 1-32"
          onChange={this.handleNumberInputChange} />
          <p className="errorMessageNumberInput">{this.state.error}</p>
      </div>
    );
  }
}

export default NumberOfEvents;