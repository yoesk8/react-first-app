import React from "react";

let FunctionalGreetingWithProps = (props)=> {
    console.log(props);
    return <h1>Hello {props.name}, {props.greeting} you are {props.age} </h1> ;
}

export default FunctionalGreetingWithProps;