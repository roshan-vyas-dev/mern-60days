import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../api/jobsApi';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (!name || !email || !password) {
            setError("Please fill all fields!");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const data = await registerUser({ name, email, password });

            if (data.user) {
                alert("Registered successfully! Please login.");
                navigate("/login");
            } else {
                setError(data.message || "Registration failed!");
            }
        } catch (err) {
            setError("Something went wrong!");
        }

        setLoading(false);
    };

    return (
        <div style={{
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
        }}>
            <div style={{
                background: "white",
                padding: "40px",
                borderRadius: "12px",
                width: "100%",
                maxWidth: "400px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
            }}>
                <h1 style={{ marginBottom: "24px", color: "#333" }}>Create Account</h1>

                {error && <p style={{ color: "red", marginBottom: "16px" }}>{error}</p>}

                <input
                    type="text"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ display: "block", width: "100%", padding: "10px", marginBottom: "12px", borderRadius: "6px", border: "1px solid #ddd" }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ display: "block", width: "100%", padding: "10px", marginBottom: "12px", borderRadius: "6px", border: "1px solid #ddd" }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ display: "block", width: "100%", padding: "10px", marginBottom: "16px", borderRadius: "6px", border: "1px solid #ddd" }}
                />

                <button
                    onClick={handleRegister}
                    disabled={loading}
                    style={{ width: "100%", padding: "10px", background: "#4f46e5", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "16px", marginBottom: "12px" }}
                >
                    {loading ? "Creating account..." : "Register"}
                </button>

                <p style={{ textAlign: "center", fontSize: "14px", color: "#666" }}>
                    Already have an account? <Link to="/login" style={{ color: "#4f46e5" }}>Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;