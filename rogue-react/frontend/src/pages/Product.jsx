import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets';
import { IoIosArrowRoundBack } from "react-icons/io";



/* slider */

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";


const Product = () => {


  const { products } = useContext(ShopContext)
  const [showProduct, setShowProduct] = useState([])

  useEffect(() => {
    if (products) {
      setShowProduct(products);
    }
  }, [products])

  console.log(products)
  return (
    <>
     <div className='container  m-auto'>

     
      {/* <h2 className='uppercase  pb-3  text-[#d2d3d4] text-2xl  text-center'>Rouge</h2> */}
   

      {/* slider code  */}
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 4 },
          640: { slidesPerView: 3 },
          320: { slidesPerView: 2 },
        }}
        className="mySwiper container"
      >
        {showProduct.map((product, index) => (
          <SwiperSlide key={product._id || index} className="cursor-pointer">
            <Link to={`/product/${product._id}`}>
              <img
                src={product.image[0]}
                alt={product.name}
                className="object-cover w-50"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>






      {/* show logo in center  */}



      <div className="fixed inset-0 flex justify-center items-center pointer-events-none z-10 ">
        <img
          src={assets.s4}
          alt="Logo"
          className="w-50 mix-blend-multiply"
        />
      </div>







      {/* all information page  */}

      {/* <div className='px-10 fixed top-15 left-28'>
                 <button className='p-2 border  text-xs cursor-pointer'>info</button>
                   <div className='grid'>
                    <Link className='text-xs underline  text-[#d2d2d4]'  to="/contact">contact</Link>
                    <Link className='text-xs text-[#d2d2d4]' to="/shipping">shipping</Link>
                    <Link className='text-xs text-[#d2d2d4]' to="/return-policy">return policy</Link>
                    <Link className='text-xs text-[#d2d2d4]' to="/privacy-policy">privacy policy</Link>
                    <Link className='text-xs text-[#d2d2d4]' to="/terms">terms</Link>
                    <Link className='text-xs text-[#d2d2d4]' to="/preOrderTerms">pre-order terms</Link>
                    <Link className='text-xs text-[#d2d2d4]' to="stocklists">stocklists</Link>
                    <Link className='text-xs text-[#d2d2d4]' to="newsletter">newsletter</Link>
                    <Link className='text-xs text-[#d2d2d4]' to="career">careers</Link>
                   </div>
               </div> */}

      <div className='px-10 fixed top-15 left-20 z-50'>

        <Link to="/" className='flex items-center justify-center text-[#A9ABAE] hover:underline text-sm cursor-pointer '>
          <IoIosArrowRoundBack className='text-xl cursor-pointer '/> back to

        </Link>

      </div>
      </div>
    </>
  )
}

export default Product
