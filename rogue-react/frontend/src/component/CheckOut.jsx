

import React from 'react'
import { useContext } from 'react';
import { ShopContext } from "../Context/ShopContext";

const checkOut = () => {

             const { cart, removeFromCart, incrementQuantity, decrementQuantity, getTotalPrice, getProductTotalPrice } = useContext(ShopContext);


    return (
        <>
   
        <div className='px-10  '>


            <div className='container mx-auto p-6 grid md:grid-cols-3 gap-6'>

                <div className=" p-6 rounded-lg shadow-md md:col-span-2">
                    <h2 className="text-lg  mb-2 text-[#A9ABAE]">Billing Address</h2>
                    <form className="grid grid-cols-2 gap-4">
                        <input className=" border w-full  p-2 placeholder-[#A9ABAE] text-[#A9ABAE] text-sm   mt-5 " type="text" placeholder="First Name" />
                        <input className=" border w-full  p-2 placeholder-[#A9ABAE] text-[#A9ABAE] text-sm   mt-5 " type="text" placeholder="Last Name" />
                        <input className="border w-full  p-2 placeholder-[#A9ABAE] text-[#A9ABAE] text-sm   mt-5 col-span-2" type="email" placeholder="Email Address" />
                        <input className="border w-full  p-2 placeholder-[#A9ABAE] text-[#A9ABAE] text-sm   mt-5" type="text" placeholder="Pin Code" />
                        <input className="border w-full  p-2 placeholder-[#A9ABAE] text-[#A9ABAE] text-sm   mt-5" type="text" placeholder="Mobile" />
                        <input className="border w-full  p-2 placeholder-[#A9ABAE] text-[#A9ABAE] text-sm   mt-5 col-span-2" type="text" placeholder="Address" />
                        <input className="border w-full  p-2 placeholder-[#A9ABAE] text-[#A9ABAE] text-sm   mt-5" type="text" placeholder="City" />
                        <input className="border w-full  p-2 placeholder-[#A9ABAE] text-[#A9ABAE] text-sm   mt-5" type="text" placeholder="State" />
                        <input className="border w-full  p-2 placeholder-[#A9ABAE] text-[#A9ABAE] text-sm   mt-5" type="text" placeholder="Country" />
                        <input className="border w-full  p-2 placeholder-[#A9ABAE] text-[#A9ABAE] text-sm   mt-5" type="text" placeholder="Alt Mobile" />
                    </form>
                </div>




                {/* Payment and Shipping */}
                <div className=" shadow-amber-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-lg  mb-4 text-[#A9ABAE]">Payment and Shipping</h2>
                    <div className="mb-2">
                        <input type="radio" name="payment" id="razorpay" className="mr-2" />
                        <label htmlFor="razorpay" className='text-sm text-[#A9ABAE] cursor-pointer '>Razorpay</label>
                    </div>
                    <div>
                        <input type="radio" name="payment" id="cod" className="mr-1" />
                        <label htmlFor="cod" className='text-sm text-[#A9ABAE] cursor-pointer'>Cash on Delivery</label>
                    </div>
                    <p className="text-[#A9ABAE] text-sm mt-4">
                        Finalize your sustainable shopping journey with ease. Complete your order and contribute to positive change today!
                    </p>
                    <div className="mt-4">
                        <input className="border border-[#A9ABAE] p-2 rounded w-full placeholder-[#A9ABAE] text-[#A9ABAE] text-sm" type="text" placeholder="Enter Coupon Code" />
                        <button className="text-[#D2D3D5] bg-[#605B55] cursor-pointer px-4 py-2 rounded w-full mt-2">Apply</button>
                    </div>
                
  
                </div>

                {/* Order Summary */}
                <div className="  shadow-amber-100 p-6 rounded-lg shadow-md">
                <h2 className="text-lg   mb-4 text-[#A9ABAE]">Order Summary</h2>
                    <p className='text-sm text-[#A9ABAE] '>Subtotal: <span className="font-semibold float-end">${getTotalPrice().toFixed(2)}</span></p>
                    <p  className='text-sm text-[#A9ABAE] '>Delivery Fee: <span className="font-semibold float-end">$10</span></p>
                    <p className="font-bold mt-2 text-[#A9ABAE]">Total: <span className=' float-end'>${getTotalPrice().toFixed(2)} </span></p>
                    <button className="text-[#D2D3D5] bg-[#605B55] cursor-pointer px-4 py-2 rounded w-full mt-2">Place Order</button>
                </div>
            </div>

        </div>
       
     
          </>
   )
 }

export default checkOut
