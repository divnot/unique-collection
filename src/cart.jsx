import React, { useContext, useEffect } from "react";
import { store } from "./cartprovider";

function Cart(){
   const {cart , handledel}  = useContext(store);

   
  //  .log(cart[0].id);
    return(
        <>
         <div className="flex justify-center m-28">
         <p className=" font-bold md:text-4xl text-2xl  ">Add To Cart</p>
         <hr/>
         </div>

       <div  className="m-20 grid lg:grid-cols-1 ">
      
  {
   cart.map((cirrr)=>{
    console.log(cirrr);
    return(
      <div className="grid lg:grid-cols-4 grid-cols-1 justify-items-center items-center p-2 "  key={cirrr.id}>
        <figure>
         
          <img  style={{width:"100px" , height:"100px"}}src={cirrr.image} alt="movie" />
        </figure>
        <p className="lg:text-3xl text-2xl">{cirrr.
category}</p>
       
        <p className="text-red-600">${cirrr.price}</p>
        <button onClick={()=>handledel(cirrr.id)} className="bg-black font-bold text-white w-20 justify-center ">Delete</button>

         </div>
    )
     

    })

  }



</div>

<div className="flex justify-center m-4">
 <button className="bg-green-600 text-white font-bold w-16 h-6">Pay</button>
</div>
        </>
      
    )
}
export default Cart ;