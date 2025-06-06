function Navbar(){
    return(
        <div className="max-w-full bg-black text-white mx-auto">
            <ul className="flex flex-row gap-5 justify-center">
                <li>Home</li>
                <li>News</li>
                <li>About</li>
                <li className="text-right">Login</li>
            </ul>
            
        </div>
    )
}

export default Navbar;