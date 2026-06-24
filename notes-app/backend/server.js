require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const authRoutes = require("./routes/auth");
const noteRoutes = require("./routes/notes");

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected!"))
    .catch((err) => console.log("Error:", err));

app.get("/", (req, res) => res.send("Notes API running!"));
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));