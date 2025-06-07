export const Dropdown = ()=>{
    return(
        <div>
            <div className="m-30 group">
                <div className="text-2xl bg-black text-white w-15 p-2 rounded-2xl cursor-pointer ">City</div>
                <div className="bg-yellow-500 p-2 w-30 border-2 mt-1 rounded-2xl hidden group-hover:block">
                    <ul>
                        <li><a href="#">Delhi</a></li>
                        <li><a href="#">Mumbai</a></li>
                        <li><a href="#">Hyderabad</a></li>
                        <li><a href="#">Pune</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
