import React, { useState } from 'react';
// import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { BsBagPlus } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=" flex  h-[16vh] flex-row  justify-between px-10 py-6 sticky top-0 z-50 ">
      <div>      
           <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <RxCross2 className="text-2xl text-[#A9ABAE] cursor-pointer" />
          ) : (
            <FiMenu className="text-2xl text-[#A9ABAE] cursor-pointer" />
          )}
        </button>


        {menuOpen && (
          <div className="mt-6 z-50 space-y-3 flex flex-col cursor-pointer">
            {[ { name: "ABOUT US", path: "/about" },
               { name: "FAQS", path: "/faqs" },
               { name: "TRACK ORDER", path: "/track-order" },
               { name: "BLOGS", path: "/blogs" },
               { name: "CONTACT US", path: "/contact" },
               { name: "LOGIN", path: "/login" },
               { name: "PRODUCTS", path: "/products" },
              ].map((item, index) => (
              <Link
                key={index} 
                to={item.path}
                onClick={() => setMenuOpen(false)} 
                className="bg-[#605B55] text-[#D2D3D5] cursor-pointer font-andale text-[12px]  px-6 text-center py-1 rounded-full">

                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div>
        {/* <img className="w-8" src={assets.s2} alt="" /> */}
        <Link to='/cart'>
        <BsBagPlus className=" text-xl text-[#d2d2d4] cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
