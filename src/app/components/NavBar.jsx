import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";

const navlinks = [
    {
        title:"About",
        path:"#about",
    },
    {
        title:"Projects",
        path:"#projects",
    },
    {
        title:"Contacts",
        path:"#contacts",
    },

]
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto pt-4 px-5">
        <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
          LOGO
        </Link>
        <div className="menu md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {
                navlinks.map((link,index)=>(
                    <li key={index}>
                        <NavLink href={link.path} title={link.title}/>
                    </li>
                ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
