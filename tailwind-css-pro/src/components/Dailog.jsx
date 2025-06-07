export const Dailog = ()=>{
    return(
        <div>
            <div className="bg-gray-500 fixed inset-0"></div>
            <div className="fixed inset-0">
                <div className="flex h-full justify-center items-center">
                    <div className="bg-white max-w-lg text-left shadow-2xl shadow-red-700 rounded relative">
                        <div className="p-5">
                            <div className="flex items-start">
                                <img src="https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png" className="w-7" alt="Error" />
                                <div className="ml-4">
                                    <h3 className="font-semibold">Deactive Account</h3>
                                    <p className="text-sm text-gray-700">Are you sure you want to deactivate your account? All of your data will be permenantly removed. This action cannot be undone</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 px-5 py-3 flex flex-row-reverse">
                                <button className="bg-red-500 ml-4 px-3 py-2 rounded-xl cursor-pointer hover:bg-red-700 text-white">Deactivate</button>
                                <button className="bg-white ml-3 shadow-sm ring-1 ring-inset rounded-md px-3 py-2 cursor-pointer hover:bg-gray-100">Cancel</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}