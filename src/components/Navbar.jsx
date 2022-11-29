import React from "react";

const Navbar = () => {
  

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white bg-slate-500">
      <div>
        <h1 >
          BEACHES
        </h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
    </div>
  );
};

export default Navbar;
