
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams, Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import SliderProduct from '../component/SliderProduct';
import { assets } from '../assets/assets';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRef } from 'react';

console.log()


const ProductDetail = () => {

    const { products, addToCart, incrementQuantity, decrementQuantity, removeFromCart, cart } = useContext(ShopContext)
    const { productId } = useParams();

    const [selectedProduct, setSelectedProduct] = useState(null)
    const [details, setDetails] = useState(false)
    const [chartDetails, setChartDetails] = useState(false)
    const [selectedSize, setSelectedSize] = useState(null)
    const [price, setPrice] = useState(null);
    const [offer, setOffer] = useState(null);
    const [discountPrice, setDiscountPrice] = useState(null);
    const sliderRef = useRef(null);
    const scrollToBottom = () => {
        sliderRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {

        console.log("all productDetails", products)

        if (products && products.length > 0 && productId) {
            const product = products.find((item) => String(item._id) === String(productId));
            setSelectedProduct(product || null);
            console.log("Selected product:", product);
        }
    }, [products, productId])


    const handleSizeSelect = (size) => {
        setSelectedSize(size);
        const selectedSizeInfo = selectedProduct?.sizesInfo.find((s) => s.size === size);
        if (selectedSizeInfo) {
            setPrice(selectedSizeInfo.actualPrice);  
            setDiscountPrice(selectedSizeInfo.discountPrice);  
            setOffer(selectedSizeInfo.offer);
        }
    };




    if (!selectedProduct) {
        return <p className='p-4'>Product not found. Please select a valid product.</p>;
    }

    return (
        <>
            <div className=' w-10/12   m-auto '>


                <div className="fixed inset-0 flex left-20 justify-center items-center pointer-events-none z-10  ">
                    <img
                        src={assets.s4}
                        alt="Logo"
                        className="w-70 mix-blend-multiply opacity-40"
                    />
                </div>

                <div className='px-10 fixed top-15 left-10 z-50'>

                    <Link to="/products" className='flex items-center justify-center text-[#A9ABAE] hover:underline text-sm cursor-pointer '>
                        <IoIosArrowRoundBack className='text-xl cursor-pointer ' /> back to

                    </Link>

                </div>

                <div className='grid grid-cols-1  lg:grid-cols-10   md:gap-4    product_detail  '>

                    <div className='lg:col-span-3  product_cont   '>
                        <div className=' sticky top-28 '>
                            <h4 className='text-xs uppercase text-[#A9ABAE] font-bold '>{selectedProduct.name}</h4>
                           
                            <p className="text-xs text-[#A9ABAE]">
                                Price: ${discountPrice !== null && discountPrice !== undefined
                                    ? discountPrice.toFixed(2)
                                    : (selectedProduct?.sizesInfo?.[0]?.discountPrice
                                        ? selectedProduct.sizesInfo[0].discountPrice.toFixed(2)
                                        : "N/A")} USD
                            </p>
                            <p className="text-xs text-red-500">
                                Offer: {offer !== null ? `${offer}% Off` : `${selectedProduct.sizesInfo[0].offer}% Off`}
                            </p>

                            <div className='flex gap-3 mt-5'>
                                <div className='w-5 h-5 rounded-full bg-[#605B55]   cursor-pointer'>

                                </div>
                                <div className='w-5 h-5 rounded-full bg-[#605B55]  cursor-pointer'>

                                </div>
                            </div>



                           

                            <div className="flex space-x-4 my-6">
                                {selectedProduct.sizesInfo.map((size, index) => (
                                    <span
                                        key={index}
                                        onClick={() => handleSizeSelect(size.size)}
                                        className={`w-8 h-8 items-center flex justify-center rounded text-sm text-[#d2d3d4] cursor-pointer ${selectedSize === size.size ? "bg-gray-200 text-black" : "bg-[#605B55] hover:bg-gray-200 hover:text-black"
                                            }`}
                                    >
                                        {size.size}
                                    </span>
                                ))}
                            </div>









                          
                            <div className="flex justify-center relative max-w-[340px] py-2 my-3 text-sm text-[#D2D3D5] cursor-pointer bg-[#605B55] rounded-2xl shadow-amber-100 items-center">
                                {selectedSize ? (
                                    <Link to="/cart" onClick={() => addToCart(selectedProduct, selectedSize)} className="cursor-pointer">
                                        <button className="cursor-pointer">Add to bag</button>
                                    </Link>
                                ) : (
                                    <button>Please Select Size</button>
                                )}
                                <div className=" absolute right-3   ">
                                    <FaArrowRightLong className="float-right" />
                                </div>
                            </div>



                            <div className='p-0 m-0'>
                                <button
                                    onClick={() => setDetails(!details)}
                                    className=" cursor-pointer text-xs text-[#A9ABAE] rounded-lg"
                                >
                                    Product Details   {details ? "-" : "+"}
                                </button>
                                {details && (
                                    <div className=" my-3 text-xs text-[#A9ABAE] ">
                                        {selectedProduct.description}
                                    </div>
                                )}
                            </div>

                            <div className='p-0 m-0'>
                                <button onClick={() => setChartDetails(!chartDetails)} className='  cursor-pointer text-xs text-[#A9ABAE] rounded-lg'>
                                    Chart Details {chartDetails ? "-" : "+"}
                                </button>
                                {
                                    chartDetails && (
                                        <div className=' fixed -top-3 left-0 w-full h-full bg-black/50 z-50   text-[14px] text-[#d2d2d4]'>
                                            <div className=" top-9 left-4 p-6 rounded-lg shadow-lg w-[60%]  relative z-50">



                                                <span className=" text-[12px] text-black p-2 mb-4 border z-20 bg-[#d2d2d4] ">Style -{selectedProduct.name}</span>
                                                <div className='bg-[#7f7f7f50] w-[350px] -z-30 left-4 -top-3 relative border'>
                                                    <button className="absolute cursor-pointer -top-3 -right-2 text-[10px] border rounded-full w-6 h-6 font-bold  bg-white text-black z-50"
                                                        onClick={() => setChartDetails(false)}>
                                                        ✖
                                                    </button>
                                                    <img src={selectedProduct.image[3]} alt={selectedProduct.name} className='object-cover' />
                                                </div>
                                                <div className="max-w-4xl mt-3  border border-gray-300  shadow-md">
                                                    <table className="w-full  text-center">
                                                        <thead className=''>
                                                            <tr className=" text-xs">
                                                                <th className="py-1 text-xs font-light ">Ref</th>
                                                                <th className="py-1 text-xs font-light">Measurement (cm)</th>
                                                                {selectedProduct.sizes.map((size) => (
                                                                    <th key={size} className=" py-1 text-xs font-light ">{size}</th>
                                                                ))}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {selectedProduct.sizeChart.map((item) => (
                                                                <tr key={ref} className="text-xs">
                                                                    <td className=" px-4 py-1 ">{item.ref}</td>
                                                                    <td className=" px-4 py-1">{item.label}</td>
                                                                    {selectedProduct.sizes.map((size) => (
                                                                        <td key={size} className=" px-4 py-1">{item[size]}</td>
                                                                    ))}
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>



                            <div className='text-[#A9ABAE] text-sm flex items-center  gap-3 cursor-pointer mt-3 ' onClick={scrollToBottom}>

                                <p> you might also like </p>
                                <span><FaArrowDown /></span>
                            </div>

                        </div>
                    </div>



                    <div className=' lg:col-span-7  product_img '>
                        <div>
                            <div className=' rotate_img'>

                     

                                 
                                 <img src={selectedProduct.image[0]} alt={selectedProduct.name} className=' product_img float-right object-cover w-[220px] text-center m-auto mb-11 top-0' />
                                <img src={selectedProduct.image[4]} alt={selectedProduct.name} className=' product_img float-right object-cover w-[220px] text-center m-auto mb-11 top-0' />
                                <img src={selectedProduct.image[5]} alt={selectedProduct.name} className=' product_img float-right object-cover w-[220px] text-center m-auto mb-11 top-0' />
                                <img src={selectedProduct.image[6]} alt={selectedProduct.name} className=' product_img float-right object-cover w-[220px] text-center m-auto mb-11 top-0' />
                                <img src={selectedProduct.image[7]} alt={selectedProduct.name} className=' product_img float-right object-cover w-[220px] text-center m-auto mb-11 top-0' />
                                <img src={selectedProduct.image[8]} alt={selectedProduct.name} className=' product_img float-right object-cover w-[220px] text-center m-auto mb-11 top-0' />
                                <img src={selectedProduct.image[9]} alt={selectedProduct.name} className=' product_img float-right object-cover w-[220px] text-center m-auto mb-11 top-0' />
                                <img src={selectedProduct.image[10]} alt={selectedProduct.name} className=' product_img float-right object-cover w-[220px] text-center m-auto mb-11 top-0' /> 
                                 

                            </div>





                            <img src={selectedProduct.image[1]} alt={selectedProduct.name} className='object-cover max-w-[600px]  mb-8 float-right w-[100%]'  />
                            <img src={selectedProduct.image[2]} alt={selectedProduct.name} className='object-cover max-w-[600px]  mb-3 float-right w-[100%]' />
                        </div>
                    </div>






                </div>




            </div>
            
            <div ref={sliderRef}>

                <SliderProduct />
            </div>
        </>
    )
}

export default ProductDetail;
