import React, { Component } from 'react';

class Select extends Component {
    constructor() {
        super();
        this.state = {
            city1: "Dhaka",
            city2: "Chittagong",
            city3: "Sylhet",
            city4: "Rajshahi",
            selectedCity: " "

        }
    }

    ChangeHandler = (event) => {
        var inputName = event.target.value;
        this.setState({ selectedCity: inputName });

    }

    showUpdate = () => {
        <p> Hi: {this.selectedCity}</p>
    }
    render() {
        return (
            <div>
                <p> Hi: {this.state.selectedCity}</p>
                <select onChange={this.ChangeHandler} >
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                </select>
                <h1>{this.selectedCity}</h1>
            </div>
        );
    }
}

export default Select;