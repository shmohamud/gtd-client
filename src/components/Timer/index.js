import React from "react";

//The Timer component is a stateful component (still classified as a Presentational Component (hence not in /views) since it's entirely reusable)
//Timer will receive a props called ‘initial.’
//We will need to display this value and decrement it by 1, every second,
//Until it reaches 0 or the user clicks the stop button.

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: props.initial,
      on: false,
    };
    this.intervalID = 0;
    this.startTimer = this.startTimer.bind(this);
    this.decrement = this.decrement.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  startTimer() {
    if (this.state.on === false && this.state.secondsLeft > 0) {
      this.intervalID = setInterval(this.decrement, 1000);
      this.setState({ on: true });
    }
  }

  stopTimer() {
    this.setState({ on: false });
    clearInterval(this.intervalID);
    console.log("INTERVAL ID AFTER STOP: ", this.intervalID);
  }

  decrement() {
    if (this.state.secondsLeft > 0) {
      this.setState({ secondsLeft: this.state.secondsLeft - 1 });
    }
    if (this.state.secondsLeft === 0) {
      clearInterval(this.intervalID);
      this.setState({ on: false });
      console.log("After clear interval: ", this.intervalID);
    }
  }

  render() {
    const button = !this.state.on ? (
      <button onClick={this.startTimer}>Start</button>
    ) : (
      <button onClick={this.stopTimer}>Stop</button>
    );
    return (
      <>
        <h1>Seconds: {this.state.secondsLeft}</h1>
        {button}
      </>
    );
  }
}
