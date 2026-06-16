import React, { useState } from 'react'

function SimpleForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submittedData, setSubmittedData] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = () => {
        if (name === "" || email === "") {
            alert("Please fill both fields");
            return;
        }
        setSubmittedData({ name, email })
    }

    return (
        <div style={{ textAlign: "center", margin: "20px", fontFamily: "Arial" }}>

            <h2>Simple Form</h2>

            <input type="text" placeholder='Enter name' value={name} onChange={handleNameChange} />
            <br /><br />

            <input type="email" placeholder='Enter email' value={email} onChange={handleEmailChange} />

            <br /><br />

            <button onClick={handleSubmit}>submit</button>

            {submittedData && (
                <div style={{ marginTop: "20px" }}>
                    <p>Submitted Name: {submittedData.name}</p>
                    <p>Submitted Email: {submittedData.email}</p>
                </div>
            )}


        </div>
    );
}

export default SimpleForm
