import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import Friends from "./Friends";

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
    }, [api])
    
    return (
        <>
            <h1>Characters in friends list:</h1>
            {api.map(i => {
                return (
                    <Friends name={i.name} age={i.age} email={i.email} key={i.id} />
                )
            })}
        </>
    )
}

export default FriendsList;