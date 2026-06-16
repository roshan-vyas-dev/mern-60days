import React, { useState } from 'react'

function Toggle() {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div style={{ textAlign: "center", margin: "20px", fontFamily: "Arial" }}>

            <button onClick={toggleVisibility}>
                {isVisible ? "Hide" : "Show"} Content

            </button>

            {isVisible && <p>This text shows or based on state</p>}

        </div>
    )
}

export default Toggle
