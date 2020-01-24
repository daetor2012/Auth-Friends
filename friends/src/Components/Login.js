import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

function Login(props) {
    
    const [form, setForm] = useState({ username: "", password: ""});

    const handleChanges = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }
    const onSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", form)
        .then(res => {
            localStorage.setItem("token", res.data.payload);

        })
        .catch(error => {
            console.log(error);
        })
        setForm({username: "", password: ""});
        
        
        
    }
    return (
        <div className="App">
            <div className="App-header">
                <Link className="links" to="/">Home</Link>
                <Link className="links" to="/protected">Friends List</Link>
            </div>
            <h3>Please login to view current friends</h3>
            <form onSubmit={onSubmit}>
                <input onChange={handleChanges} name="username" type="text" placeholder="Username" value={form.username} />
                <input onChange={handleChanges} name="password" type="password" placeholder="Password" value={form.password} />
                <button className="button" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;