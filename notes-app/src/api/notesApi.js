const BASE_URL = "http://localhost:5001/api";

const getToken = () => localStorage.getItem("token")



 export const loginUser = async (userData) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)

    })
    return response.json();

}


export const registerUser = async (userData) => {
    const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)

    })
    return response.json();

}

export const getAllNotes = async () => {
    const response = await fetch(`${BASE_URL}/notes`, {
        method: "GET",
        headers: { "Authorization": `Bearer ${getToken()}` }

    });
    return response.json();
}

export const createNote = async (noteData) => {
    const response = await fetch(`${BASE_URL}/notes`, {
        method:"POST",
        headers:{ "Authorization": `Bearer ${getToken()}`,
         "Content-Type": "application/json"
    },
    body:JSON.stringify(noteData)

     
    });
return response.json();
}

export const deleteNote = async (id) => {
    const response = await fetch(`${BASE_URL}/notes/${id}`, {
        method:"DELETE",

        headers: { "Authorization": `Bearer ${getToken()}` },

    });
    return response.json();
}