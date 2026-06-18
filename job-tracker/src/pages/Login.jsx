import React from 'react'
import { useState } from 'react'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (email === "" || password === "") {
            alert("Please fill both fields");
            return;
        }
        alert(`Logging in with ${email}`);
    };


    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>Login</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br /><br />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br /><br />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login
