// Q1: What is middleware?
// Middleware runs between request and response
// authMiddleware checks JWT token in every protected route
// No token → 401 Access denied
// Invalid token → 401 Invalid token
// Valid token → next() → request continues


// Q2: Difference between GET and POST?
// GET - fetch/read data from server, no body, data in URL
// POST - send/create data to server, data in request body
// GET never changes database data - only reads
// POST creates new data in database
// Example: GET /api/jobs → fetch jobs
// Example: POST /api/auth/login → send email and password


// Q3: What is REST API?
// REST API is a set of rules for frontend-backend communication
// Uses HTTP methods: GET, POST, PUT, DELETE
// Each URL endpoint represents one resource/action
// Stateless - server doesn't remember previous requests
// Returns JSON data
// Example endpoints in my Job Tracker:
// GET /api/jobs → fetch all jobs
// POST /api/jobs → create new job
// DELETE /api/jobs/:id → delete specific job


// Q4: SQL vs MongoDB?
// SQL - tables with rows and columns, fixed structure
// MongoDB - documents (JSON objects), flexible structure
// SQL examples: MySQL, PostgreSQL
// MongoDB examples: MongoDB Atlas
// I chose MongoDB because:
// - Works naturally with MERN stack
// - Flexible document structure
// - Easy to use with Mongoose in Node.js

// Q5: What is bcrypt and why use it?
// bcrypt is a password hashing library
// Hashing converts plain password into unreadable random string
// This hash cannot be reversed back to original password
// Even if database is hacked - passwords are safe
// Plain password: "123456"
// After bcrypt: "$2a$10$xK9...randomstring"
// In my Job Tracker:
// Register → bcrypt.hash(password) → save hash to MongoDB
// Login → bcrypt.compare(entered password, stored hash)