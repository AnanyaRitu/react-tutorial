import React, { Component } from 'react';

class Welcome extends Component {
    /* to use customized value in class component states are required.
    various properties value of the state can be changed
    Properties can be nested as well */
    constructor() {
        super()
        var fullName = {
            firstName: "Ananya",
            lastName: "Ritu"
        }
        this.state = {
            name: fullName,
            score: ["28", "30", "32"],
            login: true
        }

    }

    Buttonclick1(a) {
        alert(a)
    }

    /* to change state value setState is used */

    ChangeName(a) {
        this.setState({ name: { lastName: a } })
    }
    /*
    render() {
        if (this.state.name.firstName === "Ananya") {
            return <div>
                <h1>I am from class {this.props.name}</h1> {/* props holo parameter jeta apps.js theke ashtese }

                <button onClick={this.Buttonclick1.bind(this, "hello ami buttoner param")} >button from class component</button>
                {/* direct param dile hobena jodi kono event jatiyo function e param dite chai, bind likhe, this likhe tarpor dite hbe }
                <h1>My name is {this.state.name.firstName} {this.state.name.lastName}</h1>
                <h1>My best score is {this.state.score[2]}</h1>
                <button onClick={this.ChangeName.bind(this, "Shah")} >Change lastname</button>



            </div>
        }
        else {
            return <div>
                <h1>My name is {this.state.name.firstName} {this.state.name.lastName}</h1>
            </div>

        }
    }*/

    render() {
        /* we have seen how to retunr conditionally with if-else. but we cannot use if-else within return.
        For that we need to use element variable. 'condition?1st portion:2nd portion' if the condition is true 1st portion will be executed.
        else 2nd portion will be executed. */
        return (
            this.state.login ? <h1>login is true</h1> : <h1>login is false</h1>

        )
    }
}

export default Welcome