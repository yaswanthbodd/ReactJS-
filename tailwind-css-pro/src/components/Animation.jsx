const Animation = ()=>{
    return(
        <div>
            <div className="size-20 bg-red-400 mt-10 ml-10 rounded-full animate-bounce"></div>
            <hr />
            <div className="w-32 h-2 bg-red-300 mt-30 ml-10 animate-spin"></div>
            <div className="size-20 bg-blue-400 m-30 animate-pulse rounded-full"></div>
            <div className="size-20 bg-black m-30 animate-ping rounded-full"></div>
            <hr />
        </div>
    )
}

export default Animation;