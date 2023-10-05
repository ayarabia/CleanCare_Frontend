import React, { useState } from "react";
import logo from "../../assets/imags/logo.png";
import { navLinks } from "./data";
import { AiOutlineSearch,AiOutlineBars,AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [click, setClick] = useState(false);


    const handleClick=()=>{
        setClick(!click)
    }

    

  return (
    <header className=" bg-bgYellow  ">
      <div className=" flex justify-between items-center container mx-auto   ">
      
        <Link  to="/">
          <img className=" w-24" src={logo} alt="logo" />
        </Link>


        <ul className={` md:flex md:items-center gap-10 transitions absolute z-30 md:relative left-0
            w-full  md:w-auto py-10 md:py-0 
             ${click? "top-[10%]  bg-[#FFD378]" :" top-[-100%] bg-transparent"}
            `}> 

          {navLinks.map(({ id, path, title }) => (
            <li key={id} className="  text-center py-4 md:py-0 ">
              <Link className=" text-xl md:text-base transitions hover:text-black " 
              to={path}> {title}
              </Link>
            </li>
          ))}
        </ul>

        <div className=" flex items-center space-x-12">
          <span>
            <AiOutlineSearch className=" text-2xl cursor-pointer text-white" />
          </span>
          <Link to="login" className=" bg-Primary text-white px-2 py-1 md:px-4 md:py-2 rounded">
          log in
          </Link>
        </div>
      
     
        <div className="md:hidden text-Primary text-2xl" >
            <button onClick={handleClick}>
            {click ? <AiOutlineClose/>:  <AiOutlineBars/> }   
            </button>
        </div>


      </div>
    </header>
  );
};

export default Navbar;
