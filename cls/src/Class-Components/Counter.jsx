import React, { Component } from 'react'

export default class Counter extends Component {

    // step 1: initialize state
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    // step 2: define methods to modify state
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }

    // step 3: render UI
    render() {
        return (
            <div>
                <h2>COUNT:{this.state.count}</h2><br />
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}