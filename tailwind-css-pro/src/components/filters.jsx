const Filters = () => {
    return(
        <div>
            <h1 className="text-center text-2xl">Blur Filter</h1>
            <img src="/images/dell.jpg"/>
            <img src="/images/dell.jpg" className="blur-sm"/>
            <img src="/images/dell.jpg" className="blur-xs"/>
            <h1 className="blur-xs">Text</h1>

            <h1 className="text-center text-2xl">Brightness Filter</h1>
            <img src="/images/dell.jpg"/>
            <img src="/images/dell.jpg" className="brightness-125"/>

            {/* brightness, contrast, Grayscale, invert, hue-rotate-125 */}
        </div>
    )
}

export default Filters;