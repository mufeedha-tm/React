import React, { Component } from 'react'

export default class UpdateShould extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // This method controls whether the component should re-render or not
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate called!');
    // For example, only update if count is less than 5
    if (nextState.count < 5) {
      return true;  // allow update
    }
    console.log('Update prevented as count >= 5');
    return false;   // prevent re-rendering
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`componentDidUpdate called. New count: ${this.state.count}`);
  }

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2> <br />
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}