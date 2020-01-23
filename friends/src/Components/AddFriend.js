import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

function AddFriend() {
    const [friend, addFriend] = useState({
        id: Date.now(),
        name: "",
        age: "",
        email: ""
    });
    
    const onChange = event => {
        addFriend({...friend, [event.target.name]: event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
            .post("http://localhost:5000/api/friends", friend)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} name="name" type="text" placeholder="name" value={friend.name} />
                <input onChange={onChange} name="age" type="text" placeholder="age" value={friend.age} />
                <input onChange={onChange} name="email" type="text" placeholder="email" value={friend.email} />
                <button type="submit">Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriend;