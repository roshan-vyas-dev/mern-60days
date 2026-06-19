const express = require("express");

const router = express.Router();

// fake jobs data for now

let jobs = [
    { id: 1, title: "Frontend Developer", company: "TechCorp", status: "Applied" },
    { id: 2, title: "Backend Developer", company: "StartupXYZ", status: "Interview" },
    { id: 3, title: "Full Stack Developer", company: "BigCompany", status: "Rejected" }
];


// GET all
router.get("/", (req, res) => {
    res.json(jobs);
})

// get single job by id

router.get("/:id", (req, res) => {
    const job = jobs.find((j) => j.id === parseInt(req.params.id));

    if(!jobs){
           return res.status(404).json({ message: "Job not found!" });
    }

    res.json(job);
})


// POST - add new job
router.post("/", (req, res) => {
    const { title, company, status } = req.body;

    if (!title || !company) {
        return res.status(400).json({ message: "Title and company are required!" });
    }

    const newJob = {
        id: jobs.length + 1,
        title,
        company,
        status: status || "Applied"
    };

    jobs.push(newJob);
    res.status(201).json(newJob);
});

// DELETE - remove job
router.delete("/:id", (req, res) => {
    const jobId = parseInt(req.params.id);
    const jobExists = jobs.find((j) => j.id === jobId);

    if (!jobExists) {
        return res.status(404).json({ message: "Job not found!" });
    }

    jobs = jobs.filter((j) => j.id !== jobId);
    res.json({ message: "Job deleted successfully!" });
});

module.exports = router;