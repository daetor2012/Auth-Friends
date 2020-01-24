import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
    return (
        <div className="App">
            <div className="App-header">
                <Link className="links" to="/">Auth-Friends</Link>
                <Link className="links" to="/login">Login</Link>
                <Link className="links" to="/protected">Friends List</Link>
            </div>
            <h1>Welcome to the Home Page!</h1>
            <div>This is an experimental application using React with Axios calls to manage server data, I hope you enjoy your stay!</div>
        </div>
    )
}

export default Home;