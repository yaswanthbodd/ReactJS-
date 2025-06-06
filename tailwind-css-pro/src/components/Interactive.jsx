const Interactive = ()=>{
    return(
        <div>
            <button className="bg-blue-400 p-5 m-5 rounded-2xl cursor-pointer">Login</button>
            <button className="bg-blue-400 p-5 m-5 rounded-2xl cursor-pointer hover:bg-blue-900 text-white">Login</button>
            <button className="bg-blue-400 p-5 m-5 rounded-2xl cursor-pointer focus:bg-yellow-900 text-white">Login</button>
            <button className="bg-blue-400 p-5 m-5 rounded-2xl cursor-pointer active:bg-red-900 text-white">Login</button>

            <h1>All Interactivies in Group Items</h1>
            <button className="bg-blue-400 p-5 m-5 rounded-2xl cursor-pointer text-white 
            hover:bg-blue-900
            active:bg-green-700
            focus:bg-lime-400
            ">Login</button>
        </div>
    )
}

export default Interactive;