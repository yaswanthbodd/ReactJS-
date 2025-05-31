import { useEffect, useState } from "react";

const UseEffectHook = () => {
    const [count, setCount] = useState(0);
    const [changeStyle, setChangeStyle] = useState(false);
    useEffect(()=>{

        console.log("page loaded once");
    },[])

    const increaseCount = () => {
        setCount(count + 1);
    }
    useEffect(()=>{
        console.log('count Changed');
        count === 10 ? setChangeStyle(true) : setChangeStyle(false);
    },[count])
    return(
        <div>
            <button style={{backgroundColor : changeStyle ? 'black' : 'white', color : changeStyle ? 'white' : 'black'}} onClick={increaseCount}>Click</button>
            <h1>Count is {count}</h1>
        </div>
    )
}

export default UseEffectHook;