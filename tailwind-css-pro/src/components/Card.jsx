function Card(){
    return(
        <>
            <div className="max-w-[1320px] mx-auto">
                <h1 className="text-4xl text-center py-5">Featured Products</h1>
            </div>
            <div className="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-6 px-[20px]">
                <div className="text-center shadow-xl">
                    <div className="overflow-hidden">
                        <img src="https://picsum.photos/seed/picsum/200/300" className="hover:scale-125 duration-700"/>
                    </div>
                    <h3 className="py-2 text-2xl">Dummy Image</h3>
                    <p className="py-2">Rs.3000/-</p>
                </div>
                <div className="text-center shadow-xl">
                    <img src="https://picsum.photos/seed/picsum/200/300"/>
                    <h3 className="py-2 text-2xl">Dummy Image</h3>
                    <p className="py-2">Rs.3000/-</p>
                </div>
                <div className="text-center shadow-xl">
                    <img src="https://picsum.photos/seed/picsum/200/300"/>
                    <h3 className="py-2 text-2xl">Dummy Image</h3>
                    <p className="py-2">Rs.3000/-</p>
                </div>
                <div className="text-center shadow-xl">
                    <img src="https://picsum.photos/seed/picsum/200/300"/>
                    <h3 className="py-2 text-2xl">Dummy Image</h3>
                    <p className="py-2">Rs.3000/-</p>
                </div>
            </div>
        </>
    )
}

export default Card;