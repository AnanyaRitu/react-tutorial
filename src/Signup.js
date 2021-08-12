import React, { Component } from 'react';

class Signup extends Component {

    constructor() {
        super()
        this.state = {
            fname: " ",
            lname: " ",
            email: " ",
            mobile: " "
        }
    }
    onChangeHandler = (event) => {
        var inputName = event.target.name; /** input name gula ashbe, like fname, lname */
        var inputVal = event.target.value; /** actual user input */

        this.setState({ [inputName]: inputVal }); /** shob gula value update hoye jabe state e input onujayi. egula array er moto thake. */

        /** validating the input values */

        if (event.target.name === "fname") {
            var namePattern = /^([a-zA-Z]){2,30}$/;
            if (!namePattern.test(inputVal)) {
                this.setState({ fname: "First name is not valid" })
            }

        }

        if (event.target.name === "lname") {
            var namePattern = /^([a-zA-Z]){2,30}$/;
            if (!namePattern.test(inputVal)) {
                this.setState({ lname: "Last name is not valid" })
            }

        }

        if (event.target.name === "email") {
            var emailPattern = /\S+@\S+\.\+/;
            if (!emailPattern.test(inputVal)) {
                this.setState({ email: "Email is not valid" })
            }

        }

        if (event.target.name === "mobile") {
            if (!Number(inputVal)) {
                this.setState({ mobile: "Mobile number is not valid" })
            }
        }

    }
    render() {
        return (
            <div>
                {/** save j hoise sheta bujhte print kortesi */}
                <p> First Name : {this.state.fname}</p>
                <p> Last Name : {this.state.lname}</p>
                <p> Mobile : {this.state.email}</p>
                <p> Email : {this.state.mobile}</p>
                <form>
                    <input onChange={this.onChangeHandler} name="fname" type="text" placeholder="First name "></input> <br></br>
                    <input onChange={this.onChangeHandler} name="lname" type="text" placeholder="Last name "></input> <br></br>
                    <input onChange={this.onChangeHandler} name="email" type="text" placeholder="Email "></input> <br></br>
                    <input onChange={this.onChangeHandler} name="mobile" type="text" placeholder="Mobail no."></input> <br></br>
                    <input name="submit" type="submit" value="save now"></input> <br></br>
                    <input></input>
                    <input></input>
                    <input></input>
                </form>
            </div>
        );
    }
}

export default Signup;