import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full flex border-b-4 h-20 justify-between font-semibold indie-flower-regular box-content sticky top-0 bg-gradient-to-r from-slate-700 from-10% via-slate-500 via-60% to-slate-300 z-50">
        <div className="m-6 text-xl pl-2 sm:pl-20 xl:text-3xl cursor-pointer tracking-tighter md:tracking-widest hover:text-red-600 duration-500">
          <h1>NASA Image Gallery</h1>
        </div>

        <div className="sm:flex m-6 hidden text-lg xl:text-xl cursor-pointer gap-6 lg:gap-8 tracking-tighter sm:tracking-wide"></div>

        <div className="m-6 text-lg xl:text-xl bold hidden lg:flex cursor-pointer tracking-tighter sm:tracking-widest hover:scale-125 duration-500 px-4">
          <h1 className="">
            <Link to="/pod">Picture Of The Day</Link>
          </h1>
        </div>

        <div>
          <div className="flex flex-col sm:hidden rounded mr-5 mt-5">
            <button
              className="bg-slate-800 w-10 h-10 hover:bg-gray-500"
              onClick={toggleNavbar}
            >
              ...
            </button>
          </div>
          <div
            className={` ${
              isOpen ? "flex" : "hidden"
            } absolute sm:hidden flex-col top-16 right-6 bg-white rounded-md shadow-lg w-44`}
            id="m-navbar"
          >
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Picture of the day!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
