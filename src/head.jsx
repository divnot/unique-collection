import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";


function Head(){
    const [togle , settogle] =useState(false)

    const handletog=()=>{
        settogle(!togle)
    }
    console.log(togle);
    return(
        <>


        <nav className="fixed top-0 w-screen h-16  bg-white z-10 ">

        {/* <div  className="flex justify-center items-center mt-3">
        <input className="bg-zinc-300 md:w-96 sm:w-72 rounded-2xl text-center"  type="text" placeholder="Search" />
     </div>  */}







            
        <div className="grid mt-4  grid-cols-3 justify-items-center  ">
            <div>
              <span className="flex gap-1"> <img className="h-8" src="https://cdn.pixabay.com/photo/2022/09/01/09/26/usa-7425130_640.png" alt="logo" />  <p className="font-bold text-green-700">𝖈𝖔𝖑𝖑𝖊𝖈𝖙𝖎𝖔𝖓</p></span>  

            </div>
            <div  className={togle?"show":"close"}>
            <ul className="flex gap-3">
<NavLink to="/" ><li className="text-green-800 font-bold">Women</li></NavLink>                           
<NavLink to="/about" ><li className="text-green-800 font-bold" >Men</li></NavLink>                           
<NavLink to="/gallary" ><li className="text-green-800 font-bold">Gallary</li></NavLink>                            
<NavLink to="/contact" ><li className="text-green-800 font-bold">Contact</li></NavLink>  
<NavLink to="/cart" ><li className="text-green-800 font-bold">Cart</li></NavLink>                            
      </ul>

            </div>
            <div>
                <NavLink to={"/profile"}>
                <button className="bg-red-600 w-20 rounded-sm text-blue-50">Owner</button>
                </NavLink>
                
            </div>
            <div className="handclick">
                <button  onClick={handletog} className="bg-white "><GiHamburgerMenu /></button>
            </div>
        </div>

     {/* <div  className="flex justify-center items-center">
        <input className="bg-zinc-300 md:w-96 sm-60 rounded-2xl" type="text" placeholder="                                      Search" />
     </div> */}

        </nav>
  
        </>
    )
}

export default Head;