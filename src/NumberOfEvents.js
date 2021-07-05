import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32
    }
    handleNumberInputChange = (event) => {
        const value = event.target.value;
        const { updateNumberOfEvents } = this.props
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
          updateNumberOfEvents(value);
    };

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
          <ErrorAlert text={this.state.error} />
      </div>
    );
  }
}

export default NumberOfEvents;