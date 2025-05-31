import { useEffect, useState } from "react";


const UseStateHook = () => {
    const [flag, setFlag] = useState(true);
    const handleToggle = () => {
        setFlag(!flag);
    }

    useEffect(()=>{
        setFlag(!flag);
    },[]);
    return(
        <div>
            <button onClick={handleToggle}>Click And Changed the text</button>
            {flag ? <h1>Hello....</h1> : <h1>Hi.........</h1>}
        </div>
    )
}

export default UseStateHook;