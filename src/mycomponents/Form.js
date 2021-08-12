import React, { Component } from 'react';

class Form extends Component {
    /** form er onchange method er belay arrow format e function likhte hbe
     * event likhte hbe parameter e nahoy event.target.value kaaj korbena
     */
    constructor() {
        super()
        this.state = {
            name: " ",
            username: " "
        }

    }
    ChangeHandler = (event) => {
        var newName = event.target.value
        var inputName = event.target.name /** ekhane ase 'username */
        this.setState({ name: newName })
        this.setState({ [inputName]: newName })/** inputName er value 'username', tai state er 'username' er value assign hobe
                                                  newName e jei value ase  */
    }

    OnSubmitHandler = (event) => {
        alert(this.state.username)
    }
    /** Changehandler function input theke value niye oi value ta state er name e update korbe. pore sheita <p>this.state.name</p> 
     * er jaygay print hobe. 
    */
    render() {
        return (
            <div>
                {/** onSubmit handles what will happen when submit button is clicked */}
                <form onSubmit={this.OnSubmitHandler}>
                    <p> My first form</p>
                    {/** both are same , different way of printing the name */}
                    <p>{this.state.username}</p>
                    <p>{this.state.name}</p>
                    {/** name for inputs kinda works like id*/}
                    <input name="username" onChange={this.ChangeHandler} type="text" placeholder="Your Name" ></input> <br></br>
                    <input type="submit" placeholder="Submit" ></input>
                </form>
            </div>
        );
    }
}

export default Form;
