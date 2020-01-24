import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import Friends from "./Friends";
import AddFriend from "./AddFriend";
import { Link } from "react-router-dom";

function FriendsList() {
    const [api, setAPI] = useState();
    
    useEffect(() => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then(res => {
                console.log(res);
                setAPI(res.data);
                
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    
    if(!api) {
        return (
            <div className="App">
                <div className="App-header">
                    <Link className="links" to="/">Home</Link>
                </div>
                <div>Loading friends list...</div>
            </div>
        )
    }
    else {
    return (
        <div className="App">
            <div className="App-header">
                <Link className="links" to="/">Home</Link>
            </div>
            <AddFriend />
            <h2>Characters in friends list:</h2>
            {api.map(i => {
                return (
                    <Friends name={i.name} age={i.age} email={i.email} key={i.id} />
                )
            })}
        </div>
    )
}}

export default FriendsList;