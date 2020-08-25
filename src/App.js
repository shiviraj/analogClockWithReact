import React from 'react';
import moment from 'moment';

import './App.css';

import DrawClock from './components/DrawClock';
import Hands from './components/Hands.js';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: moment() };
  }

  componentDidMount() {
    setInterval(() => this.setState(() => ({ time: moment() })), 1000);
  }

  render() {
    return (
      <div className="clock">
        <h1>Analog Clock</h1>
        <DrawClock />
        <Hands time={this.state.time} />
        <div className="center"></div>
      </div>
    );
  }
}

export default Clock;
