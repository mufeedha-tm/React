import React, { useEffect, useState } from 'react'

const UseEff = () => {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {

        const interval = setInterval(() =>{
            setSeconds((s) => s + 1);
        },1000);

        // Unmount
        return () => clearInterval(interval)

    },[])       //Mount
  return (
    <div>
      <p>Timer: {seconds} Seconds</p>
    </div>
  )
}

export default UseEff
