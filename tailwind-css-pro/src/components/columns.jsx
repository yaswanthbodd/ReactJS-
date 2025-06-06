const Column = ()=>{
    return(
        <div>
            
            {/* <div className="columns-4">
                <div className="bg-red-400">1 Hello</div>
                <div className="bg-red-400">2 Hello</div>
                <div className="bg-green-400">3 Hello</div>
                <div className="bg-yellow-400">4 Hello</div>
                <div className="bg-green-400">5 Hello</div>
            </div> */}

            {/* lg:columns-4 md:columns-3 sm:columns-2 */}
            <div className="columns-3xs gap-1 bg-amber-300">
                <img src="/images/dell.jpg" />
                <img src="/images/dell.jpg" />
                <img src="/images/dell.jpg" />
                <img src="/images/dell.jpg" />
                <img src="/images/dell.jpg" />
                <img src="/images/dell.jpg" />
                <img src="/images/dell.jpg" />
                <img src="/images/dell.jpg" />
                <img src="/images/dell.jpg" />
                <img src="/images/dell.jpg" />
            </div>
        </div>
    )
}

export default Column;