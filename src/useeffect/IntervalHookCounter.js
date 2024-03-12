// Creating a tick timer using react hooks 

import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const[count, setCount] = useState(0)

    const tick =()=>{
        setCount(count + 1)
    }
// incase you do not want to call the dependency on the unmounting option of use effect use this function

    // const tick =()=>{
        // setCount(prevCount => prevCount + 1)
    // }

    useEffect(()=>{
        const interval = setInterval(tick, 1000)
        return()=>{
            clearInterval(interval)
        }
    }, [count])
  return (
    <div>
        {count}

    </div>
  )
}

export default IntervalHookCounter