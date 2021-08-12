import React, { Component } from 'react';

class Text extends Component {
    constructor() {
        super();
        this.state = {
            sometext: "I am a future data scientist"
        }
    }
    render() {
        return (
            <div>
                <textarea value={this.state.sometext}></textarea>
            </div>
        );
    }
}

export default Text;