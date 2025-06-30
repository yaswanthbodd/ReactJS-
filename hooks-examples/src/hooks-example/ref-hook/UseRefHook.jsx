import { useEffect, useRef } from "react"

export const UseRefHook = () => {

    const count = useRef(0);

    useEffect(()=>{
        count.current = count.current + 1;
    })

    return(
        <div>
            
            <h1>Count : {count.current}</h1>
            <button>Click here</button>
        </div>
    )
}