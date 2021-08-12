import React, { Component } from 'react';

class ForceUpdate extends Component {
    constructor() {
        super()
        this.RandomNumbers = this.RandomNumbers.bind(this)
    }
    RandomNumbers() {
        this.forceUpdate();
    }

    render() {
        return <div>
            <button onClick={this.RandomNumbers}>refresh button</button>
            <h1> Refreshed Value: {Math.random()}</h1>
        </div>
    }
}

export default ForceUpdate