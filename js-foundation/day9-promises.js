// Day 9
// Topic: Promises

// 1. CREATE A PROMISE

const myPromise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Task completed successfully");
    } else {
        reject("Task failed");
    }
});

// 2. USE THE PROMISE

myPromise
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Error:", error);

    })

// 3. Promise with setTimeout - simulate delay

const fetchData = new Promise((resolve, reject) => {
    console.log("Fetching data");

    setTimeout(() => {
        const data = { name: "Roshan", age: 22 };
        resolve(data)
    }, 2000)

});

fetchData
    .then((data) => {
        console.log("Data recieved:", data);

    })
    .catch((error) => {
        console.log("Error:", error);
    })


// 4. Promise chain - .then() after .then()

const getUser = new Promise((resolve) => {
    setTimeout(() => {
        resolve({ name: "Roshan", age: 22 })
    }, 1000)
})

getUser
    .then((user) => {
        console.log("Got user:", user.name);
        return user.age; // pass to next .then()

    })
    .then((age) => {
        console.log("User age:", age);
        return age * 2;

    })
    .then((doubled) => {
        console.log("Doubled age:", doubled);

    })
    .catch((error) => {
        console.log("Error:", error);

    })

// 5. Promise.all - run multiple promises together

const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("Result 1"), 1000)
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Result 2"), 2000)
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve("Result 3"), 500)
});

Promise.all([promise1, promise2, promise3])
    .then((result) => {
        console.log("All results:", result);
    })
    .catch((error) => {
        console.log("One failed:", error);

    });

// 6. Promise reject example
const checkAge = new Promise((resolve, reject) => {

    const age = 16;

    if (age >= 18) {
        resolve("Access granted")
    } else {
        reject("Access denied must be 18+")
    }
});

checkAge
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);

    });
