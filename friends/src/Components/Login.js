import React, { useState } from "react";
import axios from "axios";
import "../App.css";

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
            console.log(res);

        })
        .catch(error => {
            console.log(error);
        })
        setForm({username: "", password: ""});
        
        
        
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={handleChanges} name="username" type="text" placeholder="username.." value={form.username} />
                <input onChange={handleChanges} name="password" type="password" placeholder="password.." value={form.password} />
                <button className="button" type="submit">Login</button>
                
            </form>
            
        </div>
    )
}

export default Login;