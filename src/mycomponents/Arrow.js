import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
/*
function Arrow() {
    return (

        <button>my button</button>
    )

}
export default Arrow*/
/* this is how arrow function is written  , the arrow after () is the reason behind the name, parameter passing is same
as normal function. */
const Arrow = () => {
    return (
        <button className="btn btn-primary m-5" >my button</button>
    )
}
export default Arrow