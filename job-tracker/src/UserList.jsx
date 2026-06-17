import React, { useEffect, useState } from 'react'

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUsers() {

            try {

                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                if (!response.ok) {
                    throw new Error("Failed to fetch users")
                }

                const data = await response.json();
                setUsers(data);

            } catch (err) {
                setError(err.message)

            } finally {
                setLoading(false);
            }


        }
        fetchUsers();

    }, []); // empty array - runs once when component loads


    if (loading) {
        return <p>Loading users....</p>
    }

    if (error) {
        return <p style={{ color: "red" }}>Error: {error}</p>;
    }

    return (
        <div style={{ fontFamily: "Arial", margin: "20px" }}>
            <h2>User List</h2>
            {users.map((user) => (
                <div key={user.id} style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    marginBottom: "8px",
                    borderRadius: "6px"
                }}>
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                </div>
            ))}

        </div>
    )
}

export default UserList
