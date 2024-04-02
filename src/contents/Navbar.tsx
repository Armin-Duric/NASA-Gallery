const Navbar: React.FC = () => {

    let active: boolean = false;
    const dropdown: HTMLElement | null = document.getElementById('m-navbar');
    
    function toggleNavbar(): void {
        if(active === true) {
            dropdown?.classList.remove('hidden');
            active = false;
        } else {
            dropdown?.classList.add('hidden');
            active = true;
        }
    }
    
    return (
        <>
        <div className="w-full flex border-b-4 h-20 justify-between font-semibold indie-flower-regular box-content">
            <div className="m-6 text-xl pl-2 sm:pl-20 xl:text-3xl cursor-pointer tracking-tighter md:tracking-widest hover:text-red-600 duration-500">
                <h1>NASA Image Gallery</h1>
            </div>
            <div className="m-6 text-lg xl:text-xl bold hidden lg:flex cursor-pointer tracking-tighter sm:tracking-widest hover:scale-125 duration-500 px-24">
                <h1 className="">Picture Of The Day</h1> 
            </div>
            <div className="sm:flex m-6 hidden text-lg xl:text-xl cursor-pointer gap-6 lg:gap-8 tracking-tighter sm:tracking-wide"> 
                <h1 className="flex hover:scale-125 duration-500">Home</h1> 
                <h1 className="flex hover:scale-125 duration-500">Nebula</h1> 
                <h1 className="flex hover:scale-125 duration-500">Search</h1> 
            </div>

            <div>

            <div className="flex flex-col sm:hidden rounded mr-5 mt-5">
                <button className="bg-slate-800 w-10 h-10 hover:bg-gray-500" onClick={toggleNavbar}>
                    ...
                </button>
            </div>
            <div className="absolute sm:hidden top-16 right-6 hidden bg-white rounded-md shadow-lg w-44" id="m-navbar">
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Item 1</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Item 2</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Item 3</a>
            </div>
            </div>
 
        </div> 
    </>
    )
};

export default Navbar