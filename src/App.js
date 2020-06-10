import React from 'react';
import './App.css';

import { connect } from "react-redux";
import { Timer } from "./components/Timer";
import { minusSeconds } from "./actions/timerActions";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Timer 
        countDownSeconds = { this.props.second }
        countDownMinutes = { this.props.minute }
        countDownHours = { this.props.hour }
         />
      </div>
    );
  }

  componentDidMount() {
    this.myInterval = setInterval( () => {
      this.props.minusSeconds(0.1);
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

}

const mapStateToProps = (state) => {
  return {
    hour: state.hour,
    minute: state.minute,
    second: state.second
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    minusSeconds: (number) => {
      dispatch(minusSeconds());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
