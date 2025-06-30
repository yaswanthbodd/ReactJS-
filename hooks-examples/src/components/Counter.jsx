import React, { useContext } from 'react'
import { AppContext } from '../hooks/AppContext'

const Counter = () => {
    const {setCount,count} = useContext(AppContext)
    
    return (
        <div>
            <button onClick={()=> setCount(count+1)}>Increase</button>
        </div>
    )
}

export default Counter