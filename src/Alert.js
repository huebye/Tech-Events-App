import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.fontStyle = null;
    this.height = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      fontStyle: this.fontStyle,
      height: this.height,
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
    constructor(props) {
      super(props);
      this.color = 'white';
      this.height = 'frCell';
    }
  }

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
    this.fontStyle = 'italic';
    this.height = 'frCell';
  }
}


export { InfoAlert };
export { ErrorAlert };