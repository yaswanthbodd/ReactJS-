function Positions(){
    return(
        <div className="">

            {/* <div className="bg-blue-300 size-40 absolute bottom-10 right-10"></div>
            <div className="bg-green-400 size-40 absolute bottom-10 left-10"></div>
            <div className="bg-red-400 size-40 absolute top-10 right-10"></div>
            <div className="bg-yellow-300 size-40 absolute top-10 left-10 animate-bounce">Hello</div> */}
            
            
                <div className="bg-red-500 size-72 relative">
                    <div className="bg-green-200 size-20 absolute top-0 right-0"></div>
                    <div className="bg-yellow-200 size-20 absolute right-0 bottom-0"></div>
                    <div className="bg-sky-400 size-20 absolute left-0 bottom-0"></div>
                    <div className="bg-pink-300 size-20 absolute left-0 top-0"></div>
                </div>
          
            <div className="absolute top-0 right-0">
                <div className="bg-red-500 size-72 relative">
                    <div className="bg-green-200 size-20 absolute top-0 right-0"></div>
                    <div className="bg-yellow-200 size-20 absolute right-0 bottom-0"></div>
                    <div className="bg-sky-400 size-20 absolute left-0 bottom-0"></div>
                    <div className="bg-pink-300 size-20 absolute left-0 top-0"></div>
                </div>
            </div>
            <div className="bg-blue-600 size-72">
                <h1 className="bg-black text-white fixed z-20">Hello this text is fixed</h1>
            </div>
            <div className="bg-green-500 size-72 relative">
                <div className="bg-green-950 size-32 inset-20 absolute">Hello</div>
            </div>
        </div>
    )
}

export default Positions;