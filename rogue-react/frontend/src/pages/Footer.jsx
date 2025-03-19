
import React from 'react'
import { Link } from 'react-router-dom'
//  import { IoIosArrowRoundUp } from "react-icons/io";


const Footer = () => {

  // const scrollToTop=()=>{
  //     window.scrollTo({ top:0, behavior:'smooth'})
  // }
  return (
    <div className='px-10  py-10 justify-center gap-2  flex  items-center flex-wrap' >
      {/* <p className='uppercase py-4 cursor-pointer text-[#d2d2d4] text-sm  m-auto '>
            <Link to='/'>Rouge</Link> &copy;
             
          </p> */}

      {[{name:"SHIPPING", path: "/shipping" },
      { name: "RETURN POLICY", path: "/return-policy" },
      { name: "PRIVACY POLICY", path: "/privacy-policy" },
      { name: "TERMS", path: "/terms" },
      { name: "PRE ORDER TERMS", path: "/pre-order-terms" },
      { name: "NEWSLETTER", path: "/subscribe" },
      

      { name: "CAREERS", path: "/careers" },
      ].map((item, index) => (
        <Link
          key={index}
          to={item.path}
          onClick={() => setMenuOpen(false)}
          className=" cursor-pointer font-andale bg-[#605B55] text-[#D2D3D5] text-[8px] px-6 text-center py-1 rounded-full">
          {item.name}
        </Link>
      ))}







      {/* <div className='flex justify-end'>
            <button  onClick={scrollToTop} className=' flex items-center  gap-1 bg-gray-800px-4 py-2 rounded-full shadow-lg hover:text-[#9d9d9e] transition-all duration-300 cursor-pointer text-[#d2d2d4] text-sm'>
                back to top  <IoIosArrowRoundUp className='text-xl' />
            </button>
          </div> */}










      <div className=' absolute  right-4  '>
      {[
      { name: "LOGIN ", path: "/login"},
      { name:' /  SIGNUP',path:'/signup'}
     
      ].map((item, index) => (
        <Link
          key={index}
          to={item.path}
          onClick={() => setMenuOpen(false)}
          className=" cursor-pointer font-andale text-[11px] text-[#A9ABAE]  text-center ">

          {item.name}
        </Link>
      ))}
      </div>


    </div>
  )
}

export default Footer
