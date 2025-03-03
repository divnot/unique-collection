import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Homedetail(){
  const [details , setdetails] = useState([]);

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
       <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center">
        <div>
      <img src={details.image} alt="noimage" />
      
        </div>
        <div>
            <p className="text-2xl underline font-bold">{details.title}</p>
            <p className="font-bold">{details.description }</p>
            <p className="font-bold" >${details.price}</p>
        </div>
       </div>
        </>
    )
}

export default Homedetail;