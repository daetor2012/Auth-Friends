import React from "react";
import "../App.css";

function Friends(props) {
    return (
        <div className="character">
            <h3>Character:</h3>
            <div>Name: {props.name}</div>
            <div>Age: {props.age}</div>
            <div>Email: {props.email}</div>
        </div>
    )
}

export default Friends;