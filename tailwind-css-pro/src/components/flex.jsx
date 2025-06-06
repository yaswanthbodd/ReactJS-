const Flex = ()=>{
    return(
        <div>
            <div  className="h-screen">
                <div className="bg-gray-400 size-full flex items-center justify-center gap-5">
                    <div className="bg-red-400 size-20"></div>
                    <div className="bg-green-400 size-20"></div>
                    <div className="bg-yellow-400 size-20"></div>
                    <div className="bg-blue-400 size-20"></div>
                </div>
            </div>
            <div className="bg-gray-400 size-full flex items-center justify-around gap-5">
                    <div className="bg-red-400 size-20"></div>
                    <div className="bg-green-400 size-20"></div>
                    <div className="bg-yellow-400 size-20"></div>
                    <div className="bg-blue-400 size-20"></div>
            </div>
            <hr className="m-10"/>
            <div className="bg-gray-400 size-full flex flex-col items-center justify-around gap-5">
                    <div className="bg-red-400 size-20"></div>
                    <div className="bg-green-400 size-20"></div>
                    <div className="bg-yellow-400 size-20"></div>
                    <div className="bg-blue-400 size-20"></div>
            </div>
            <hr className="m-10"/>
            <div className="h-screen">
                <div className="bg-pink-300 size-full flex flex-wrap flex-col sm:flex-row content-start">
                    <div className="bg-red-300 size-20"></div>
                    <div className="bg-yellow-300 size-20"></div>
                    <div className="bg-green-300 size-20"></div>
                    <div className="bg-orange-300 size-20"></div>
                    <div className="bg-blue-300 size-20"></div>
                    <div className="bg-gray-300 size-20"></div>
                    <div className="bg-red-700 size-20"></div>
                    <div className="bg-green-800 size-20"></div>
                    <div className="bg-yellow-800 size-20"></div>
                    <div className="bg-blue-600 size-20"></div>
                    <div className="bg-pink-800 size-20"></div>
                    <div className="bg-red-300 size-20"></div>
                </div>  
            </div>
        </div>
    )
}

export default Flex;
