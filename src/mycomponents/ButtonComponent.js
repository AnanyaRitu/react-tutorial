import React from 'react';

function Mybtn(props) {


    function Buttonclick() {
        alert("Button has been clicked ")
    }

    return (
        <button onClick={Buttonclick}> Hey!!! {props.name}</button> /* Buttonclick function er shudhu nam likhte hobe,
                                                                         paranthesis dile click er agei eta call hye jabe */

    )
}

export default Mybtn;