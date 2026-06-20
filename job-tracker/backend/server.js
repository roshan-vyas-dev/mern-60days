require("dotenv").config()

const express = require("express");
const app = express();
const jobRoutes = require("./routes/jobs");
const { default: mongoose } = require("mongoose");

app.use(express.json());


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected successfully"))
.catch((err)=>console.log("MongoDB connection error:",err))



app.get("/", (req, res) => {
    res.send("Job Tracker API is running");
});

// use job routes for any URL starting with /api/jobs
app.use("/api/jobs", jobRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

})