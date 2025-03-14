// import { useInfiniteQuery} from "@tanstack/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { CiDesktopMouse1 } from "react-icons/ci";

const deta = ({PageParams})=>{
  return axios.get(`https://fakestoreapi.com/products/?_limit=10&_page=${PageParams}`);
 
 }


function Gallery (){

// const [mata , setmata] = useState([]);
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

// const product = async ()=>{
//     const beta = await fetch("https://dummyjson.com/products")
//     const seta = await beta.json();
//     console.log(seta.products);
//     setmata(seta.products);
// }

// useEffect(()=>{
//     product();
// },[])

// console.log(mata);

//     return(
//         <>

//  <ul className="grid lg:grid-cols-3 grid-cols-2 justify-items-center items-center gap-1 ">
//   {
//     mata.map((curr)=>{
//       return(
//         <li key={curr.id}>
       
//           <img className="w-64 h-64"  src={curr.images} alt="noimage" />
//           <p className="text-center m-1 text-black font-bold text-2xl">{curr.title }</p>
         
//         </li>
//       )

//     })
//   }
// </ul> */

       
       
        
        
//         </>
//     )
// }
// import { useInfiniteQuery} from "@tanstack/react-query";
// import React from "react";


// function Gallery (){
//     const Unlim=async ({PageParams})=>{

//       const tim= await fetch(`https://fakestoreapi.com/products&_limit=10&page=${PageParams}`);
//        const time1= tim.json();
//        return time1;

   
//     }

//   const   {data, isloading , fetchNextPage}= useInfiniteQuery(
//         {
//             queryKey:["/posts"],
//             queryFn:Unlim,
//             initialPageParam:1,
//             getNextPageParam:(_lastPage, allPages)=>{
//                 console.log(_lastPage, allPages);
//                 if(allPages.length < 2){
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


//     return(
//         <>

//     <h1>oka</h1>
       
        
        
//         </>
//     )


const {data, isloading , fetchNextPage } =useInfiniteQuery({
  queryKey:["post"],
  queryFn:deta,
  initialPageParam:1,
  getNextPageParam:(_lastPage, allPages)=>{
   // console.log(_lastPage , allPages);
   
    if(allPages.length < 2){
      return allPages.length +1 ;
    }
    else{
      return undefined ; 
    }

  }

})
console.log(data);


if(isloading){
  return(
   <p>...loading</p>
  )
}


return(
  <>
  <div>
  <ul className="grid lg:grid-cols-3 shadow-black  grid-cols-2 justify-items-center items-center md:gap-14 gap-12 mt-24 m-5 ">
  {
    data?.pages?.map((ready)=>{
      return ready?.data?.map((ready1)=>{
        return(
          <li key={ready1.id} >

            <img className="w-64 h-60" src={ready1.image} alt="noimage" />
          {/* <p>{ready1.title}</p> */}

        </li>

        )
      })

    })
  }
 </ul>
 <button className="fetchNextPage bg-black rounded-sm text-white w-10 ">load</button>

  </div>
 
 
  </>
)
 }

 export default Gallery;

