import React from 'react'

const Card = () => {
  return (
     <div
            style={{
                border: "1px solid #ccc",
                padding: "15px",
                width: "200px",
                borderRadius: "8px",
                textAlign: "center",
            }}
        >
            <h3>My First Card</h3>
            <p>This is my first React project</p>
            <button>Click Me</button>
        </div>
  )
}

export default Card