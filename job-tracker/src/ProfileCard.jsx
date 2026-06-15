import React from 'react'

function ProfileCard(props) {
    return (
        <div style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            width: "250px",
            textAlign: "center",
            fontFamily: "Arial"
        }}>

            <h2>{props.name}</h2>
            <p>{props.role}</p>
            <p>Age: {props.age}</p>

        </div>
    )
}

export default ProfileCard
