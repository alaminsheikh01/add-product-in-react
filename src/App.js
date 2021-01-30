import React, { Component } from "react";
import "./App.css";

class Timer extends Component {
  componentDidMount() {
    setInterval(this.ticker, 1000);
  }
  ticker() {
    this.setState({ clock: new Date() - this.props.start });
  }
  constructor(props) {
    super(props);
    this.state = {
      clock: 0,
    };
    this.ticker = this.ticker.bind(this);
  }
  render() {
    var clock = Math.round(this.state.clock / 1000);
    return (
      <>
        <p>You have been on this site since:</p>
        <br />
        <span>{clock}</span>
      </>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>Timer app</h1>
      <Timer start={new Date()} />
    </div>
  );
}

export default App;
