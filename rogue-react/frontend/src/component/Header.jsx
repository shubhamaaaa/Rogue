import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="h-[84vh] w-full bg-fixed bg-cover bg-center relative flex justify-center items-center">

            {/* <img
                className="h-[466px]  bottom-0 absolute  object-cover"
                src={assets.p_img1}
                alt=""
            /> */}

            <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-10 ">
                <img
                    src={assets.s4}
                    alt="Logo"
                    className="w-80 mix-blend-multiply"
                />
            </div>


            <div className="absolute right-10 cursor-pointer top-1/2 transform -translate-y-1/2">
                {/* <p className="bg-[#d2d2d4] cursor-pointer font-andale  border border-gray-400 px-4 py-2 rounded-full text-[12px] tracking-wide">
                    CLOTHING
                </p> */}
                <Link to="/products" className="bg-[#605B55] text-[#D2D3D5] cursor-pointer font-andale   px-4 py-1 rounded-full text-[12px] tracking-wide" >CLOTHING</Link>
            </div>
        </div>
    );
};

export default Header;
