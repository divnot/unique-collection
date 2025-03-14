import { createContext, useEffect, useReducer } from "react"

export const store = createContext();


// const changecart =()=>{
//     let storage = localStorage.getItem("addcart")
//     if(storage == []){
//    return [];
//     }
//     else{
//         storage;
//     }
// };
const initialstate ={
    cart:[]
}

const reducer = (state, action)=>{
    if(action.type === "addtocart"){
        const {cartdata} = action.Payload;
        // console.log(cartdata);
        let cartproduct ={
            id:cartdata.id,
            image:cartdata.image,
            title:cartdata.title,
            price:cartdata.price,
            
category:cartdata.
category,
           }
    
            return{
              ...state ,
               cart:[...state.cart , cartproduct],
            };
       
    }
    if(action.type === "del"){
    
        const del = state.cart.filter((curr)=>{
            return curr.id !== action.Payload.id ;

        })

        return{
            ...state ,
             cart:del,
          };
    }
    return state;

}
 export function Handlegiver( {children}){
    

   // const name= "alex";

    const [state , dispatch] = useReducer(reducer, initialstate);

    const handlecart =(cartdata)=>{
        return(
            dispatch({type:"addtocart" , Payload:{cartdata}})
        )
    }

    const handledel =(id)=>{
      
        return(
            dispatch({type:"del" , Payload:{ id}})
        )
    }

    useEffect( ()=>{ 
        localStorage.setItem("addcart" , JSON.stringify(state.cart));
      }
        ,[state.cart])

        console.log(state.cart)

 
   
    return(
        <store.Provider value={{...state, handlecart , handledel}} >
        {children}
        </store.Provider>
    )
}



