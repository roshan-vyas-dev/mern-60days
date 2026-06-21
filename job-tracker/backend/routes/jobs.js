const express = require("express");

const router = express.Router();
const Job = require("../models/job");
const authMiddleware=require("../middleware/auth")



// get all jobs

router.get("/",authMiddleware, async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);

    } catch (err) {
        res.status(500).json({ message: err.message })

    }

})

// GET single job by id

router.get("/:id",authMiddleware, async (req, res) => {
    try {

        const job = await Job.findById(req.params.id);

        if (!job) {
            return res.status(404).json({ message: "Job Not Found" })
        }

        res.json(job);

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


// POST - add new job

router.post("/",authMiddleware, async (req, res) => {
    try {
        const { title, company, status, notes } = req.body;

        if (!title || !company) {
            return res.status(400).json({ message: "Title and company required" })
        }

        const newJob = new Job({ title, company, status, notes });
        const savedJob = await newJob.save();

        res.status(201).json(savedJob)

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


// PUT - update job

router.put("/:id",authMiddleware, async (req, res) => {
    try {
        const updatedJob = await Job.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )

        if (!updatedJob) {
            res.status(404).json({ message: "Job not found" })
        }

        res.json(updatedJob)

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


// DELETE - remove job

router.delete("/:id",authMiddleware, async (req, res) => {
    try {
        const deletedJob=await Job.findByIdAndDelete(req.params.id);

        if(!deletedJob){
            return res.status(404).json({message:"Job not found"})
        }

        res.json({message:"Job deleted successfully"})

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router;