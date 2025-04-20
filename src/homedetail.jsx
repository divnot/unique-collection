import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { store } from "./cartprovider";


function Homedetail(){
  const [details , setdetails] = useState([]);
  const {handlecart} = useContext(store);

    const detail = useParams();
    console.log(detail.detail);

    const innerdetail = async ()=>{
      const deta = await fetch(`https://fakestoreapi.com/products/${detail.detail}`);
      const delta = await deta.json();
      setdetails(delta);
      
    }

    useEffect(()=>{
     innerdetail() 
},[])
    return(
        <>
       <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center m-32 items-center">
        <div>
      <img className="w-96 " src={details.image} alt="noimage" />
      
        </div>
        <div className="m-20 ">
            <p className="text-3xl underline text-center  font-bold">{details.title}</p>
            <p className="font-bold text-center m-2">{details.description }</p>
            <div className="flex m-3 lg:gap-64 gap-44 justify-center ">
            <p className="font-bold bg-black w-20 text-center  text-white" >${details.price}</p>
            <div onClick={ ()=> alert("Added to cart")}>
            <button className="font-bold bg-black w-20 text-center text-white" onClick={()=> handlecart(details)} >CART</button>

            </div>
            
              
            </div>

           
          
            
        </div>
       </div>
        </>
    )
}

export default Homedetail;