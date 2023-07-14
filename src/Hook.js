import React, { useState, useEffect } from 'react'
import './App.css';

const Hook = () => {
    const [count, setCount] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {
        console.log("component mount on the screen for the first time");
    }, [])

    useEffect(() => {
        console.log("Value get updated");
        //as sson as component get mounted 
        let interval;
        if(start){
         interval = setInterval(() => setCount(count + 1), 1000);
        }
        return (() => 
        {
            clearInterval(interval)
        })
    }, [count, start])

    return (
        <><div className='section' >
            <h1 style={{ color: "rgb(218, 69, 99)" }}>Count Down</h1>
            <p className='inc'>{count}</p>

            {/* <button className="btn" onClick={handleState}>{running ? 'Stop' : 'Start'}</button> */}
            <button className="btn" onClick={()=>setStart(true)}>Start</button>
        </div>
        </>
    )
}

export default Hook