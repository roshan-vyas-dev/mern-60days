// Q1: What is Mongoose and why use it?
// Mongoose is an ODM (Object Document Mapper) for MongoDB
// Makes working with MongoDB easier and structured
// 3 main benefits:
// 1. Schema - defines structure of data (like a blueprint)
//    const jobSchema = new mongoose.Schema({ title: String, company: String })
// 2. Built-in methods - Job.find(), Job.findById(), Job.save()
//    instead of writing raw MongoDB queries
// 3. Validation - required: true, enum, default values
//    prevents invalid data from being saved to database
// Without Mongoose - raw MongoDB, no structure, no validation
// With Mongoose - structured, validated, easy to query


// Q2: Difference between find() and findById()?
// find() - fetches ALL documents from collection
// Job.find() → returns array of all jobs
// find() can also filter: Job.find({ status: "Applied" })
// → returns only jobs with status "Applied"
// findById() - fetches ONE document by its _id
// Job.findById("6a3b94f2...") → returns single job object
// If not found → returns null
// In my Job Tracker:
// GET /api/jobs → Job.find() → all jobs
// GET /api/jobs/:id → Job.findById(req.params.id) → single job


// Q3: save() vs findByIdAndUpdate()?
// save() - used when creating a NEW document
// const newJob = new Job({ title, company, status })
// await newJob.save() → saves to database
// findByIdAndUpdate() - used when UPDATING existing document
// await Job.findByIdAndUpdate(id, newData, { new: true })
// { new: true } → returns updated document not old one
// Without { new: true } → returns old document before update
// In my Job Tracker:
// POST /api/jobs → new Job() + save() → create new job
// PUT /api/jobs/:id → findByIdAndUpdate() → update existing job

// Q4: req.params vs req.body vs req.query?
// req.params - data from URL path parameters
// Route: /api/jobs/:id
// URL: /api/jobs/6a3b94f2
// req.params.id → "6a3b94f2"
// req.body - data sent in request body (POST, PUT)
// POST /api/jobs with body { title: "Developer", company: "TechCorp" }
// req.body.title → "Developer"
// req.query - data from URL query string (after ?)
// GET /api/jobs?status=Applied
// req.query.status → "Applied"
// In my Job Tracker:
// DELETE /api/jobs/:id → req.params.id
// POST /api/jobs → req.body.title, req.body.company

// Q5: HTTP Status Codes?
// Status codes tell client what happened with their request
// 200 - OK - request successful (GET, PUT, DELETE)
// 201 - Created - new resource created (POST)
// 400 - Bad Request - client sent wrong or missing data
// 401 - Unauthorized - no token or invalid token
// 404 - Not Found - resource doesn't exist
// 500 - Internal Server Error - server side error
// In my Job Tracker:
// POST /api/jobs success → 201
// GET /api/jobs success → 200
// No token provided → 401
// Job not found → 404
// Database error → 500