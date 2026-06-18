import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Jobs from './pages/Jobs';

function App() {

  // fake authentication state for now
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <BrowserRouter>

      <nav style={{ padding: "15px", background: "#4f46e5" }}>
        <Link to="/" style={{ color: "white", marginRight: "15px" }}>Home</Link>
        <Link to="/login" style={{ color: "white", marginRight: "15px" }}>Login</Link>
        <Link to="/dashboard" style={{ color: "white", marginRight: "15px" }}>Dashboard</Link>
        <Link to="/jobs" style={{ color: "white", marginRight: "15px" }}>Jobs</Link>

        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          style={{ marginLeft: "20px" }}>
          {isLoggedIn ? "Logout" : "Fake Login"}
        </button>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected route - redirect to login if not authenticated */}
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/jobs"
          element={isLoggedIn ? <Jobs /> : <Navigate to="/login" />}
        />
      </Routes>



    </BrowserRouter>
  )
}

export default App
