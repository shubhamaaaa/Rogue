
import React from 'react'
import { FaArrowDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Shipping = () => {
  return (
    <div className='px-10 w-10/12 m-auto '>

      <div>
        <p className='flex items-center  text-[#A9ABAE] text-xs'>SHIPPING <FaArrowDown className='ms-3' /> </p>
      </div>

      <p >
        <strong className='text-xs  my-6 block  text-[#A9ABAE]'>PLEASE ALLOW 3-7 WORKING DAYS FOR ORDER FULFILLMENT NOTICE AND TRACKING INFORMATION.</strong>
      </p>
      <p className='text-[#A9ABAE] text-xs mb-5' >upon placing your order, you will receive an order confirmation email. once your order is packed you will receive a second email with tracking information. during times of high volume such as new drops, please allow 7 working days to receive your tracking information email.</p>

      <p className='text-[#A9ABAE] text-xs'>all orders are shipped from our hong kong warehouse. we use a range of courier providers and aim to provide the fastest and most convenient shipping possible to each location. our main carriers include fedex, ups, dhl and dpex.</p>

      <p  className='text-[#A9ABAE] text-xs mb-5'>
        <strong className='text-xs  my-6 block  text-[#A9ABAE]'>INTERNATIONAL TAXES AND DUTIES.</strong>
      </p>
      <p  className='text-[#A9ABAE] text-xs mb-5' >All international duties, taxes or border charges are calculated at checkout.</p>

      <p><strong className='text-xs  my-6 block  text-[#A9ABAE]'>ORDER TRANSIT TIMES</strong></p>

      <p  className='text-[#A9ABAE] text-xs mb-5'>once your order is picked up by our courier partner, the below is an indication on how long it will take for you to receive it.</p>

      <p  className='text-[#A9ABAE] text-xs mb-5' >usa – 2-6 days <br />

      japan – 1-4 days<br />
      uk – 2-6 days<br />
      germany – 2-6 days<br />
      italy – 2-6 days<br />
      france – 2-6 days<br />
      switzerland – 2-6 days<br />
      netherlands – 2-6 days<br />
      spain – 2-6 days<br />
      canada – 2-6 days<br />
      new zealand – 2-6 days<br />
      australia – 2-6 days  </p> 



      <p  className='text-[#A9ABAE] text-xs mb-5'>we do ship to most countries via express courier 1-5 days transit time. if your country is not listed you can contact <Link to="mailto:rogue">info@gmail.com</Link> to find out your estimated order shipping time.</p>
    </div>
  )
}

export default Shipping;

