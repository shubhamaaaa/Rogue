

 import {  createContext } from "react";
  import { products } from "../assets/assets";
  import { useState } from "react";
  import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
 export const ShopContext=createContext();

   const ShopContextProvider=( props)=>{
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([]);
    console.log("products context:", products)
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    const [cart, setCart] = useState(() => {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage on update 
  
  useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


     const addToCart=(product, selectedSize)=>{

         if(!selectedSize){
             alert("please select a size before adding to cart!")
             return;
         }

         const sizeInfo = product.sizesInfo.find((size) => size.size === selectedSize);
        if (!sizeInfo) {
            alert("Invalid size selected!");
            return;
        }

         setCart((prevCart)=>{
              const existingItem=prevCart.find((item)=>item.id === product.id &&  item.size === selectedSize  )

              if(existingItem){
                return prevCart.map((item)=>
                      item.id === product.id && item.size === selectedSize
                ? { ...item, quantity: item.quantity + 1 }  
                : item
               )
              }
              else {
               return [...prevCart, { ...product, quantity: 1, size: selectedSize ,actualprice: sizeInfo.actualPrice, 
                discountprice: sizeInfo.discountPrice, }]; 
           }
         })
     }
     /*  remove from cart */
     const removeFromCart = (productId, size) => {
      setCart((prevCart) => prevCart.filter((item) => !(item.id === productId && item.size === size)));
  };


  
 // Increment Quantity
 const incrementQuantity = (productId, size) => {
   setCart((prevCart) =>
       prevCart.map((item) =>
           item.id === productId && item.size === size
               ? { ...item, quantity: item.quantity + 1 }
               : item
       )
   );
};


    // Decrement Quantity
    const decrementQuantity = (productId, size) => {
      setCart((prevCart) =>
          prevCart
              .map((item) =>
                  item.id === productId && item.size === size
                      ? { ...item, quantity: item.quantity - 1 }
                      : item
              )
              .filter((item) => item.quantity > 0) 
      );
  };
//    prodcut total price 
  const getProductTotalPrice = (productId, size) => {
    const item = cart.find((item) => item.id === productId && item.size === size);
    return item ? item.discountprice * item.quantity : 0;
};

   // Get total price
   const getTotalPrice = () => {
      return cart.reduce((total, item) => total + item.discountprice * item.quantity, 0);
};



const getProductsData = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/products/list"
    );
    if (response.data.success) {
      setProducts(response.data.products);
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    console.error(error);
    toast.error(error.message);
  }
};

useEffect(() => {
  getProductsData();
}, []);






useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      
    }
  }, []);

    const value ={
        products,selectedProduct,setSelectedProduct,addToCart,cart,removeFromCart,incrementQuantity,decrementQuantity,getTotalPrice,getProductTotalPrice,
        token,setToken,navigate

     }
     return(
         <ShopContext.Provider value={value}>

            {props.children}

         </ShopContext.Provider>
     )
  }
export default ShopContextProvider;