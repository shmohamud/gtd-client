import React from "react";

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

  renderTime() {
    let hours = Math.floor(this.state.secondsLeft / (60 * 60));

    let divisor_for_minutes = this.state.secondsLeft % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
 
  
    return(<h1>Minutes: {obj.m} Seconds: {obj.s}</h1>)

  }

  render() {
    const button = !this.state.on ? (
      <button onClick={this.startTimer}>Start</button>
    ) : (
      <button onClick={this.stopTimer}>Stop</button>

    );



    return (
      <>
        {this.renderTime()}
        {button}
      </>
    );
  }
}
