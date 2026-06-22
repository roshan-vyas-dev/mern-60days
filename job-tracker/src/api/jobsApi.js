const BASE_URL = "http://localhost:5000/api";

// get token from localstorage

const getToken = () => localStorage.getItem("token");

// auth
export const registerUser = async (userData) => {
    const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "appllication/json" },
        body: JSON.stringify(userData)

    });
    return response.json();
};

export const loginUser = async (userData) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    });
    return response.json();
};


// jobs
export const getAllJobs = async () => {
    const response = await fetch(`${BASE_URL}/jobs`, {
        headers: {
            "Authorization": `Bearer ${getToken()}`
        }

    });
    return response.json();

};


export const createJob = async (jobData) => {
    const response = await fetch(`${BASE_URL}/jobs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        },
        body: JSON.stringify(jobData)
    });
    return response.json();
};

export const deleteJob = async (id) => {
    const response = await fetch(`${BASE_URL}/jobs/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${getToken()}`
        }
    });
    return response.json();
};