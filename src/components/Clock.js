import React from 'react';
import moment from 'moment';
import AnalogClock from './AnalogClock';
import Hands from './Hands.js';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: moment() };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(() => ({ time: moment() }));
    });
  }

  render() {
    return (
      <div className="clock">
        <h1>Analog Clock</h1>
        <AnalogClock />
        <Hands time={this.state.time} />
        <div className="center"></div>
      </div>
    );
  }
}

export default Clock;
