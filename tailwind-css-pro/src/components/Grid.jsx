function Grid(){
    return(
        <>        
        <div className="max-w-[1200px] py-5 mx-auto px-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5">
            <div className="bg-green-600 py-5 text-center col-span-full">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur pariatur tenetur neque totam. Animi harum aliquam, quasi libero nostrum error aspernatur molestiae totam qui a.</div>
            <div className="bg-green-600 py-5 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur pariatur tenetur neque totam. Animi harum aliquam, quasi libero nostrum error aspernatur molestiae totam qui a.</div>
            <div className="bg-green-600 py-5 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur pariatur tenetur neque totam. Animi harum aliquam, quasi libero nostrum error aspernatur molestiae totam qui a.</div>
            <div className="bg-green-600 py-5 text-center col-start-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur pariatur tenetur neque totam. Animi harum aliquam, quasi libero nostrum error aspernatur molestiae totam qui a.</div>
            <div className="bg-green-600 py-5 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur pariatur tenetur neque totam. Animi harum aliquam, quasi libero nostrum error aspernatur molestiae totam qui a.</div>
            <div className="bg-green-600 py-5 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur pariatur tenetur neque totam. Animi harum aliquam, quasi libero nostrum error aspernatur molestiae totam qui a.</div>
            <div className="bg-green-600 py-5 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur pariatur tenetur neque totam. Animi harum aliquam, quasi libero nostrum error aspernatur molestiae totam qui a.</div> <div className="bg-green-600 py-5 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur pariatur tenetur neque totam. Animi harum aliquam, quasi libero nostrum error aspernatur molestiae totam qui a.</div>
        </div>
        <h1 className="text-center text-5xl">Grid Template Row</h1>
            <div className="max-w-[1320px] grid sm:grid-rows-5 lg:grid-rows-4 grid-flow-col mx-auto gap-5">
                <div className="bg-green-400 py-5 text-center">1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, qui hic tempora eaque voluptatibus eos placeat ea dicta libero eveniet debitis velit aspernatur non?</div>
                <div className="bg-green-400 row-span-2 py-5 text-center">2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, qui hic tempora eaque voluptatibus eos placeat ea dicta libero eveniet debitis velit aspernatur non?</div>
                <div className="bg-green-400 py-5 text-center">3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, qui hic tempora eaque voluptatibus eos placeat ea dicta libero eveniet debitis velit aspernatur non?</div>
                <div className="bg-green-400 py-5 text-center">4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, qui hic tempora eaque voluptatibus eos placeat ea dicta libero eveniet debitis velit aspernatur non?</div>
                <div className="bg-green-400 py-5 text-center">5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, qui hic tempora eaque voluptatibus eos placeat ea dicta libero eveniet debitis velit aspernatur non?</div>
                <div className="bg-green-400 py-5 text-center">6  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, qui hic tempora eaque voluptatibus eos placeat ea dicta libero eveniet debitis velit aspernatur non?</div>
                <div className="bg-green-400 py-5 text-center">7  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, qui hic tempora eaque voluptatibus eos placeat ea dicta libero eveniet debitis velit aspernatur non?</div>
                <div className="bg-green-400 row-span-4 py-5 text-center">8  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, qui hic tempora eaque voluptatibus eos placeat ea dicta libero eveniet debitis velit aspernatur non?</div>
            </div>
        </>

    )
}

export default Grid;