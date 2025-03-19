

import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { IoIosArrowRoundBack } from "react-icons/io";

const Cart = () => {


    const { cart, removeFromCart, incrementQuantity, decrementQuantity, getTotalPrice, getProductTotalPrice } = useContext(ShopContext);

    if (cart.length === 0) {
        return <>
            <div className="text-center text-2xl w-[100vw] h-[60vh]">


                <p className=" text-[#A9ABAE] mt-10">Your cart is empty.
                </p>
                <Link to='/products' className="cursor-pointer text-sm text-[#A9ABAE] font-bold underline">Buy Now</Link>
            </div>
        </>
    }


    return (

        <>
            <div className="fixed inset-0 flex left-20 justify-center items-center pointer-events-none z-10  ">
                <img
                    src={assets.s4}
                    alt="Logo"
                    className="w-70 mix-blend-multiply opacity-40"
                />
            </div>

            <div className='container m-auto'>
                <div className=' '>
                    <div className='top_header hidden md:flex justify-between text-[#A9ABAE] text-sm   '>
                        <div>
                            Product
                        </div>
                        <div></div>
                        <div>
                            Price
                        </div>
                        <div>
                            Size
                        </div>
                        <div>Quantity</div>
                        <div>Total</div>
                        <div></div>
                    </div>

                    <div className="detail_container mt-12 text-[#A9ABAE] text-sm">
                        {cart.map((item, index) => (
                            <div key={index} className="flex justify-between items-center border-b py-4">
                                <img src={item.image[0]} alt={item.name} className="w-15 h-15 object-cover" />

                                <div className="md:contents">
                                    <h4>{item.name}</h4>
                                                                
                                     <div className="flex">
                                     <p className=" md:hidden" >Price : &nbsp;</p> 
                                      <p>${item.discountprice ? item.discountprice.toFixed(2) : "0.00"}</p>
                                     </div>

                                      <div className="flex">
                                        <p  className=" md:hidden" >Size : &nbsp;</p>       <p>{item.size}</p>

                                      </div>
                                
                                    <div className="flex items-center space-x-2">
                                    <p  className=" md:hidden" >Quantity : </p>
                                        <button className="px-2 py-1  rounded cursor-pointer" onClick={() => decrementQuantity(item.id, item.size)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button className="px-2 py-1  rounded cursor-pointer" onClick={() => incrementQuantity(item.id, item.size)}>+</button>
                                    </div>



                                    <div className='product flex'>
                                    <p  className=" md:hidden" >total : &nbsp;</p>
                                        <h3 className="text-xm   font-semibold">  ${getProductTotalPrice(item.id, item.size)?.toFixed(2) || "0.00"}</h3>

                                    </div>
                                    </div>
                                






                                <button className=" text-gray-300 cursor-pointer hover:underline" onClick={() => removeFromCart(item.id, item.size)}>X</button>
                            </div>
                        ))}
                    </div>



                    <div className="w-10/12 py-12  ">
                        <h3 className="text-[#A9ABAE] text-sm font-semibold">Subtotal: ${getTotalPrice().toFixed(2)}</h3>
                        <p className="text-sm mt-4 text-[#A9ABAE] ">
                            shipping and all applicable taxes & duties calculated at checkout.

                        </p>
                        <p className="text-sm mt-4 text-[#A9ABAE] "> No returns or exchanges on discounted / sale items.</p>
                        <Link to="/checkout" className="mt-7 inline-block px-4 py-2 text-sm bg-[#605B55] text-[#D2D3D5] cursor-pointer rounded-full">
                            Proceed to Checkout
                        </Link>
                    </div>

                </div>
                
            </div>

            <div className='px-10 fixed top-15 left-10 z-50'>
                
                <Link to="/products" className='flex items-center justify-center text-[#A9ABAE] hover:underline text-sm cursor-pointer '>
                  <IoIosArrowRoundBack className='text-xl cursor-pointer '/> back to
        
                </Link>
        
              </div>



        </>

    )
}

export default Cart
