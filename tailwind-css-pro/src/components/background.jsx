const Background = () => {
    return(
        <div>
            Background Classes in tailwind
            <div className="bg-red-400 h-96 bg-no-repeat bg-center bg-[url(./images/dell.jpg)]">
                Background Image
            </div>
            <hr />
            <div className="bg-red-400 h-96 bg-no-repeat bg-center bg-contain bg-[url(./images/dell.jpg)]">
                Background Image
            </div>
            <hr />
            <h1 className="text-center text-5xl">Gradient Color</h1>
            <div className="gradient bg-gradient-to-t from-red-400 to-green-500 size-96"></div>
            <div className="gradient bg-gradient-to-tr from-blue-300 to-yellow-200 size-96"></div>

            <h1 className="text-center text-5xl">Shadow of the Card</h1>

            <div className="size-96 m-32 shadow-red-400 shadow-2xl rounded-2xl">External Shadow</div>

            <div className="size-96 m-32 shadow-blue-500 shadow-inner rounded-2xl"></div>
        </div>
    )
}

export default Background;