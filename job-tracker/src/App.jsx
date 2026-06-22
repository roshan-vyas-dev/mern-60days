import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
    const isLoggedIn = !!localStorage.getItem("token");

    return (
        <BrowserRouter>
            <nav style={{ padding: "15px", background: "#4f46e5", display: "flex", gap: "15px", alignItems: "center" }}>
                <Link to="/" style={{ color: "white" }}>Home</Link>
                {!isLoggedIn && <Link to="/login" style={{ color: "white" }}>Login</Link>}
                {isLoggedIn && <Link to="/dashboard" style={{ color: "white" }}>Dashboard</Link>}
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/dashboard"
                    element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;