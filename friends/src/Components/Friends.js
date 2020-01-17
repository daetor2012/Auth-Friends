import React from "react";

function Friends(props) {
    return (
        <div>
            <h3>Character:</h3>
            <div>{props.name}</div>
            <div>{props.age}</div>
            <div>{props.email}</div>
        </div>
    )
}

export default Friends;