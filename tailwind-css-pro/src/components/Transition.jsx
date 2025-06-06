export const Transition = () =>{
    return(
        <div>
            <button className="bg-blue-400 cursor-pointer m-10 p-4 rounded">Login</button>
            <button className="bg-blue-400 cursor-pointer m-10 p-4 rounded hover:bg-blue-900">Login</button>  
            <button className="bg-blue-400 cursor-pointer m-10 p-4 rounded hover:bg-blue-900 transition duration-1000">Login</button>  
            <button className="bg-blue-400 cursor-pointer m-10 p-4 rounded hover:opacity-15 transition duration-1000">Login</button>  
            <button className="bg-red-400 cursor-pointer m-10 p-4 rounded hover:rotate-180 transition duration-1000">Login</button>
            <button className="bg-blue-400 cursor-pointer m-10 p-4 rounded hover:scale-75 transition duration-1000">Zoom-out</button> 
            <button className="bg-blue-400 cursor-pointer m-10 p-4 rounded hover:scale-125 transition-transform duration-1000">zoom-in</button>
            <button className="bg-blue-400 cursor-pointer m-10 p-4 rounded hover:scale-x-125 transition duration-1000">Sign-up</button>  
        </div>
    )
}