import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/jobsApi';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (email === "" || password === "") {
            setError("Please fill both fields!");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const data = await loginUser({ email, password });

            if (data.token) {
                // save token to localStorage
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
                navigate("/dashboard");
            } else {
                setError(data.message || "Login failed!");
            }
        } catch (err) {
            setError("Something went wrong!");
        }

        setLoading(false);
    };

    return (
        <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: "400px", margin: "0 auto" }}>
            <h1>Login</h1>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ display: "block", width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "6px", border: "1px solid #ddd" }}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ display: "block", width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "6px", border: "1px solid #ddd" }}
            />

            <button
                onClick={handleLogin}
                disabled={loading}
                style={{ width: "100%", padding: "10px", background: "#4f46e5", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "16px" }}
            >
                {loading ? "Logging in..." : "Login"}
            </button>
        </div>
    );
}

export default Login;