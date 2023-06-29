"use client"

const { useState } = require("react")

const Counter = () => {
    const [count, setCount] = useState(0)

    return(
        <>
            <button 
                onClick={() => setCount(prev => prev+1)}>
                    +
            </button>
            <p>{count}</p>
        </>
    )
}

export default Counter