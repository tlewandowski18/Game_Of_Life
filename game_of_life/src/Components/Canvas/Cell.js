import React, {useState} from "react"

function Cell() {
    const [status, setStatus] = useState("dead")

    
    
    const toggleStatus = (event) => {
        if (status == "dead") {
            setStatus("alive")
        } else {
            setStatus("dead")
        }
    }

    return (
        <div className={`cell ${status=="alive" ? "clicked" : ""}`} onClick={toggleStatus}>
        
        </div>
    )
}

export default Cell