import { useState } from 'react';
import { loginUser } from './api/notesApi';

function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const data = await loginUser({ email, password });
        if (data.token) {
            localStorage.setItem("token", data.token);
            onLogin();
        } else {
            alert(data.message);
        }
    };

    return (
        <div style={{ padding: "40px", maxWidth: "400px", margin: "0 auto" }}>
            <h1>Notes App Login</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ display: "block", width: "100%", padding: "10px", marginBottom: "10px" }}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ display: "block", width: "100%", padding: "10px", marginBottom: "10px" }}
            />
            <button onClick={handleLogin} style={{ padding: "10px 20px", background: "#4f46e5", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>
                Login
            </button>
        </div>
    );
}

export default Login;