import React from "react";

function Todo(props){
    return(
        <div className="block">
            <h2>{props.title}</h2>
            <img src={props.img}></img>
            <p>{props.text}</p>
        </div>
    )
}

export default Todo;