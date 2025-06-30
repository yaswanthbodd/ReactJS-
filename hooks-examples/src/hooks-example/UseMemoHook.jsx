import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {

    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    const cudeNum = (num)=>{
        console.log("Calculation Done !");
        return Math.pow(num, 3);
    }

    const result = useMemo(()=>cudeNum(number),[number]) ;

    return (
        <div>
            <input type='number' name='number' value={number} onChange={(e)=> setNumber(e.target.value)} />
            <h1>Power of the number : {result}</h1>
            <button onClick={()=> setCounter(counter+1)}>Clicked here</button>
            <h1>Counter : {counter}</h1>
        </div>
    )
}

export default UseMemoHook