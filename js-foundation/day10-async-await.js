// Day 10
// Topic: async/await

// 1. BASIC async/await
async function greet() {
    return "Hello Roshan";
}
// async function always returns a Promise
greet().then((message) => console.log(message));

// 2. await keyword

function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Done waiting"), 1000)
    });
}
async function runTask() {
    console.log("Task Started...");
    const result = await waitOneSecond(); //waits here
    console.log(result);
    console.log("Task finished");
}
runTask()


// 3. Rewrite Day 9 promises using async/await
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ name: "Roshan", age: 22 }), 1000)
    });
}
function getJob() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ title: "Developer", salary: 50000 }), 500)
    });
}
async function getUserInfo() {
    console.log("Fetching User...");
    const user = await getUser();
    console.log("User:", user);

    console.log("Fetching job...");
    const job = await getJob();
    console.log("Job:", job);

    console.log(`${user.name} works as ${job.title}`);
}
getUserInfo()


// 4. try/catch for error handling

function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("Access granted")
        } else {
            reject("Access denied, must be 18+")
        }
    })
}

async function verifyAge() {
    try {
        const result = await checkAge(16);
        console.log(result);
    } catch (error) {
        console.log("Error Caught:", error);
    }

}

verifyAge();
// 5. async/await with Promise.all
async function fetchAll() {
    const p1 = new Promise((resolve) => setTimeout(() => resolve("Data 1"), 1000));
    const p2 = new Promise((resolve) => setTimeout(() => resolve("Data 2"), 500));
    const p3 = new Promise((resolve) => setTimeout(() => resolve("Data 3"), 1500));

    const result=await Promise.all([p1,p2,p3]);
    console.log("All data:",result); 
}
fetchAll()

// 6. Real example - fake API call
function fakeAPI(endpoint) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (endpoint === "/users") {
                resolve([
                    { id: 1, name: "Roshan" },
                    { id: 2, name: "Arjun" },
                    { id: 3, name: "Priya" }
                ]);
            } else {
                reject("Endpoint not found");
            }
        }, 1000);
    });
}

async function loadUsers() {
    try {
        console.log("Loading users...");
        const users = await fakeAPI("/users");
        users.forEach((user) => console.log(`${user.id}: ${user.name}`));
    } catch (error) {
        console.log("API Error:", error);
    }
}

loadUsers();