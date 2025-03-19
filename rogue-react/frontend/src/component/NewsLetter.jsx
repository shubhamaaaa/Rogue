
import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import newsletter from '../assets/newsletter.mp4'
import { FaArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NewsLetter = () => {
  return (
    <div className='relative w-screen h-screen flex justify-center items-center' >
      <video className="absolute top-0 left-0 w-full h-full object-cover opacity-40 "
        src={newsletter}
        autoPlay
        loop
        muted
      />
      <div className=' max-w-[500px]  z-50  '>
        <p className='flex items-center  gap-3 text-sm text-[#A9ABAE]'>Subscribe < FaArrowDown /></p>

        <p className='text-[#A9ABAE] text-sm mt-6'>join our newsletter  to stay informed about early access, restocks and letest fashion.</p>

        <form action="" id='frmLogin'>
          <div>
            <input type="email" className='border w-full py-2 mt-6 mb-3 px-2 text-[#A9ABAE] placeholder-[#A9ABAE] text-sm outline-0' name='txtemail' id='txtemail' placeholder='Email' />
          </div>


          <div>
            <button type='submit' className='w-full border rounded-full bg-[#605B55] hover:bg-[#534f49]   py-2 px-2 mt-3 text-[#D2D3D5] text-sm outline-0 cursor-pointer'> Subscribe </button>
          </div>
        </form>
      </div>

       <div className='px-10 fixed top-15 left-20 z-50'>

        <Link to="/products" className='flex items-center justify-center text-[#A9ABAE] hover:underline text-sm cursor-pointer '>
          <IoIosArrowRoundBack className='text-xl cursor-pointer '/> back to

        </Link>

      </div>
    </div>



  )
}

export default NewsLetter
