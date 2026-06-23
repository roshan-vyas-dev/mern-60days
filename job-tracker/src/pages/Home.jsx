function Home() {
    return (
        <div style={{
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Arial",
            textAlign: "center",
            padding: "20px"
        }}>
            <h1 style={{ fontSize: "48px", color: "#4f46e5", marginBottom: "16px" }}>
                Job Tracker
            </h1>
            <p style={{ fontSize: "18px", color: "#666", marginBottom: "32px", maxWidth: "500px" }}>
                Track your job applications in one place. Never lose track of where you applied.
            </p>
            <a href="/login" style={{
                padding: "12px 32px",
                background: "#4f46e5",
                color: "white",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "16px"
            }}>
                Get Started →
            </a>
        </div>
    );
}

export default Home;