
 import React, { useContext  } from 'react'
 import Marquee from "react-fast-marquee";

 import { ShopContext } from '../Context/ShopContext';
 import { useState } from 'react';
 import { useCallback } from 'react';
 
 const SliderProduct = () => {

 const[hoveredImg,setHoveredImg]=useState(false)

 const handleMouseEnter = useCallback(() => {
    console.log("Hovered: Showing rotated images");
    setHoveredImg(true);
}, []);

const handleMouseLeave = useCallback(() => {
    console.log("Unhovered: Showing default images");
    setHoveredImg(false);
}, []);
     
     
 const { products } = useContext(ShopContext)

   return (
      <div  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

      
        <Marquee className='py-6 mt-6' speed={80} pauseOnHover={true} gradient={false} >
         
                   
            {
                products.map((item)=>(                   
                    <div key={item.id} >

                    <img  src={hoveredImg ? item.rotateImg : item.image[0]}  alt="img1" className='object-cover w-[160px] ' />
                </div>
             ))
            }

            {/* {
                products.map((item)=>(
                     <div key={item.id}>
                         <img src={item.rotateImg} alt="img"  className='object-cover w-[160px] ' />

                     </div>
                ))
            }   */}

        </Marquee>
        </div>
   )
 } 
 export default SliderProduct;
 