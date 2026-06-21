require("dotenv").config()

const express = require("express");
const mongoose=require("mongoose");

const app = express();
const jobRoutes = require("./routes/jobs");
const authRoutes=require("./routes/auth");

app.use(express.json());


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected successfully"))
.catch((err)=>console.log("MongoDB connection error:",err))



app.get("/", (req, res) => {
    res.send("Job Tracker API is running");
});

app.use("/api/auth",authRoutes);
app.use("/api/jobs", jobRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

})