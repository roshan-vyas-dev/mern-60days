const express = require("express");
const app=express();
const jobRoutes=require("./routes/jobs");

app.use(express.json());


const PORT=5000;

// basic test route

app.get("/",(req,res)=>{
    res.send("Job Tracker API is running");
});

// use job routes for any URL starting with /api/jobs
app.use("/api/jobs", jobRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})