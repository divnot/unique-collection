// import { useInfiniteQuery} from "@tanstack/react-query";
import { meta } from "@eslint/js";
import React, { useEffect, useState } from "react";


function Gallery (){

const [mata , setmata] = useState([]);
//     const Unlim=async ({PageParams})=>{

//       const tim= await fetch(`https://fakestoreapi.in/api/products?_limit=10&page=${PageParams}`);
//        const time1= tim.json();
//        return time1;

   
//     }

//   const   {data, isloading , fetchNextPage}= useInfiniteQuery(
//         {
//             queryKey:["/posts"],
//             queryFn:Unlim,
//             initialPageParam:1,
//             getNextPageParam:(_lastPage, allPages)=>{
//               //  console.log(_lastPage, allPages);
//                 if(allPages.length < 5){
//                     return allPages.length +1 ;
//                 }
//                 else{
//                     return undefined;
//                 }

//             }
//         }
//     )

//     console.log(data);


//     if(isloading){
//         return(
//             <>

//             <h1>...loading</h1>
            
//             </>
//         )
//     }

const product = async ()=>{
    const beta = await fetch("https://dummyjson.com/products")
    const seta = await beta.json();
    console.log(seta.products);
    setmata(seta.products);
}

useEffect(()=>{
    product();
},[])

console.log(mata);

    return(
        <>

 <ul className="grid lg:grid-cols-3 grid-cols-2 justify-items-center items-center gap-1 ">
  {
    mata.map((curr)=>{
      return(
        <li key={curr.id}>
       
          <img className="w-64 h-64"  src={curr.images} alt="noimage" />
          <p className="text-center m-1 text-black font-bold text-2xl">{curr.title }</p>
         
        </li>
      )

    })
  }
</ul> */

       
       
        
        
        </>
    )
}

export default Gallery;