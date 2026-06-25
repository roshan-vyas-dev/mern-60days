import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllJobs, createJob, deleteJob } from '../api/jobsApi';

function Dashboard() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [status, setStatus] = useState("Applied");
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        setLoading(true);
        const data = await getAllJobs();
        setJobs(Array.isArray(data) ? data : []);
        setLoading(false);
    };

    const handleAddJob = async () => {
        if (!title || !company) {
            alert("Please fill title and company!");
            return;
        }

        const newJob = await createJob({ title, company, status });
        setJobs([...jobs, newJob]);
        setTitle("");
        setCompany("");
    };

    const handleDelete = async (id) => {
        await deleteJob(id);
        setJobs(jobs.filter((job) => job._id !== id));
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "700px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h1>Welcome {user.name}!</h1>
                <button onClick={handleLogout} style={{ padding: "8px 16px", background: "#ef4444", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>
                    Logout
                </button>
            </div>

            <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
                <h3>Add New Job</h3>
                <input
                    type="text"
                    placeholder="Job title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ padding: "8px", marginRight: "8px", borderRadius: "6px", border: "1px solid #ddd" }}
                />
                <input
                    type="text"
                    placeholder="Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    style={{ padding: "8px", marginRight: "8px", borderRadius: "6px", border: "1px solid #ddd" }}
                />
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    style={{ padding: "8px", marginRight: "8px", borderRadius: "6px", border: "1px solid #ddd" }}
                >
                    <option>Applied</option>
                    <option>Interview</option>
                    <option>Rejected</option>
                    <option>Offer</option>
                </select>
                <button
                    onClick={handleAddJob}
                    style={{ padding: "8px 16px", background: "#4f46e5", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}
                >
                    Add Job
                </button>
            </div>

            {loading ? (
                <div style={{ textAlign: "center", padding: "40px", color: "#4f46e5" }}>
                    <p style={{ fontSize: "18px" }}>Loading your jobs...</p>
                </div>
            ) : (
                <div>
                    <h3>Your Jobs ({jobs.length})</h3>
                    {jobs.length === 0 && <p>No jobs yet. Add one above!</p>}
                    {jobs.map((job) => (
                        <div key={job._id} style={{ background: "white", border: "1px solid #ddd", padding: "15px", borderRadius: "8px", marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div>
                                <h4 style={{ margin: "0 0 4px" }}>{job.title}</h4>
                                <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>{job.company}</p>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <span style={{ padding: "4px 10px", borderRadius: "20px", fontSize: "12px", background: job.status === "Offer" ? "#dcfce7" : job.status === "Interview" ? "#fef9c3" : job.status === "Rejected" ? "#fee2e2" : "#e0e7ff", color: job.status === "Offer" ? "#16a34a" : job.status === "Interview" ? "#ca8a04" : job.status === "Rejected" ? "#dc2626" : "#4f46e5" }}>
                                    {job.status}
                                </span>
                                <button onClick={() => handleDelete(job._id)} style={{ padding: "6px 12px", background: "#ef4444", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "12px" }}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dashboard;