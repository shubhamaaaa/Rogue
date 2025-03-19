
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import loginimg from '../assets/login.jpg'
import googleImg from '../assets/google.png'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { ShopContext } from '../Context/ShopContext'

const Login = () => {
  const {token,setToken,navigate}= useContext(ShopContext);
  const [email, setEmail] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [password, setPassword] = useState('');
  const [passwords, showPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url =  '/api/auth/login' ;
    const body =  { email, password, rememberMe };

    try {
      const response = await fetch(`http://localhost:3000${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setToken(data.token)
        localStorage.setItem('token', data.token);
        alert( 'Login successful');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleForgotPassword = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(()=>{
    if (token) {
     navigate('/')
    }
   },[token])

  


  return (
    <div className=' flex w-[100vw] h-[100vh] '>

      <div className='w-[30%]'>
        <img src={loginimg} className="h-full w-[100%] " alt="" />
      </div>

      <div className='w-[70%] m-auto  flex  justify-center'>
        <div className='w-[400px]'>
          <div>
            <img src={assets.s4} alt="Logo" className="w-30 mix-blend-multiply opacity-40" />
          </div>
          <div>
            <p className='text-[#A9ABAE] text-sm'>Let's get started</p>
            <p className='text-[#A9ABAE] text-sm'>
              Your Journey Starts Here.
            </p>

            <div className='flex my-6 pb-3'>
              <Link className='flex items-center gap-4' to='google'>
                <img src={googleImg} alt="google" className='w-6 ' />
                <span className='text-[#A9ABAE] text-sm underline'>Google</span></Link>
            </div>

          </div>
          <div className='loginbars'> </div>

          <div className='text-[#A9ABAE]  text-sm font-medium pt-7 my-6'>
            Not a Member? <Link to="/signup" className='text-[#A9ABAE] underline'>Register</Link>
          </div>
          <form onSubmit={handleSubmit} action="" id='frmLogin'>
            <div>
              <input  value={email}
              onChange={(e) => setEmail(e.target.value)}
              required type="email" className='border w-full py-1 px-2 text-[#A9ABAE] placeholder-[#A9ABAE] text-sm outline-0' name='txtemail' id='txtemail' placeholder='Email' />
            </div>



            <div className='flex relative '>

              <input  value={password}
              onChange={(e) => setPassword(e.target.value)}
              required type={passwords ? "text" : "password"} className='border w-full py-1 px-2 placeholder-[#A9ABAE] text-[#A9ABAE] text-sm outline-0  mt-5' name='txtpassword' id='txtpassword' placeholder='Password' />

              <div
                className="absolute right-3 top-1/2 transform -translate-y-0/2 cursor-pointer"
                onClick={() => showPassword(!passwords)}
              >
                {passwords ? (
                  <FaEye className="text-[#A9ABAE]" />
                ) : (
                  <FaEyeSlash className="text-[#A9ABAE]" />
                )}
              </div>

            </div>



            <div className="flex justify-between items-center mt-3">
        <label className="flex items-center text-sm text-[#A9ABAE]">
          <input  checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)} type="checkbox" className="mr-2  text-[#A9ABAE] cursor-pointer" />
          Remember Me
        </label>
        <Link onClick={handleForgotPassword}  className="text-[#A9ABAE]  text-sm hover:underline">
          Forgot Password?
        </Link>
      </div>

            <div>
              <button type='submit' className='w-full border  bg-[#605B55] hover:bg-[#534f49]   py-1 px-2 mt-3 text-[#D2D3D5] text-sm outline-0 cursor-pointer'> Login </button>
            </div>


          </form>




        </div>


      </div>
    </div>
  )
}

export default Login;
