import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
	this.state = { paragraph: "" };
	this.show = this.show.bind(this);
  }

  show() {
    this.setState({
      paragraph:
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy "
    });
  }
  render() {
    return (
      <div id="main">
        <p id="para">{this.state.paragraph}</p>
        <button id="click" onClick={this.show}>
          click
        </button>
      </div>
    );
  }
}

export default App;


