const express = require("express");
const router = express.Router();
const bycrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/Users");
const authMiddleware = require("../middleware/auth");

// Register new User

router.post("/register", async (req, res) => {
    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(404).json({ message: "All fields are required" })
        }

        // check existing user
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already existed" })
        }

        // hash the password - never save plain text password

        const salt = await bycrpt.genSalt(10);
        const hashedPassword = await bycrpt.hash(password, salt);

        //  create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save();

        res.status(201).json({ message: "User registered successfully", user: { id: savedUser._id, name: savedUser.name, email: savedUser.email } })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


// LOGIN - check credentials and give token

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "email and password required" })
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "invalid email or password" })
        }

        // compare entered password with hashed password

        const isMatch = await bycrpt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "invalid  email or password" })
        }

        // create token

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )

        res.json({ message: "Login successful", token, user: { id: user._id, name: user.name, email: user.email } })


    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router;