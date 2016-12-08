import React, { Component } from 'react';
import './App.css';

const styles = {
  inputStyle: {
    marginTop: -10,
    width: 100,
    height: 35,
    lineHeight: "35px",
    verticalAlign: "middle",
    textAlign: "center",
    borderRadius: 5,
    fontSize: 28,
    color: "maroon",
    fontWeight: "bold"
  },
  buttonStyle: {
    width: 100,
    height: 30,
    backgroundColor: "maroon",
    lineHeight: "25px",
    verticalAlign: "middle",
    fontSize: 25,
    fontWeight: "bold",
    borderRadius: 5,
    paddingBottom: 10,
    marginRight: 15
  },
  countStyle: {
    padding: 20,
    backgroundColor: "lightgray",
    borderRadius: 50,
    lineHeight: "100px",
    fontSize: 25,
    verticalAlign: "middle",
    // marginLeft: "46%"
  },
  center: {
    textAlign: "center",

  }
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      increment: 1
    }
  }

  increment() {
    let count = this.state.count;
    let increment = this.state.increment;
    let newCount = count += increment;
    this.setState({ count: newCount });
  }

  decrement() {
    let count = this.state.count;
    let increment = this.state.increment;
    let newCount = count -= increment;
    this.setState({ count: newCount });
  }

  updateIncrement(e) {
    let newIncrement = parseInt(e.target.value, 10);
    this.setState({ increment: newIncrement });
  }

  render() {
    let { inputStyle, buttonStyle, countStyle, center } = styles;
    return (
      <div className="App">
        <h3>Increment</h3>
        <input type="number" style={inputStyle} defaultValue={this.state.increment}
               onChange={this.updateIncrement.bind(this)}/>
        <div style={center}>
          <span style={countStyle}>{this.state.count}</span>
        </div>
        <button style={buttonStyle} onClick={this.increment.bind(this)}>+</button>
        <button style={buttonStyle} onClick={this.decrement.bind(this)}>-</button>
      </div>
    );
  }
}


export default App;
