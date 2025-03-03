import React, { useState } from "react";
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
        <div className="grid mt-4  grid-cols-3 justify-items-center  ">
            <div>
              <span className="flex gap-1"> <img className="h-8" src="https://cdn.pixabay.com/photo/2022/09/01/09/26/usa-7425130_640.png" alt="logo" />  <p className="font-bold text-green-700">𝖈𝖔𝖑𝖑𝖊𝖈𝖙𝖎𝖔𝖓</p></span>  

            </div>
            <div  className={togle?"show":"close"}>
            <ul className="flex gap-3">
<NavLink to="/" ><li className="text-green-800 font-bold">Home</li></NavLink>                           
<NavLink to="/about" ><li className="text-green-800 font-bold" >About</li></NavLink>                           
<NavLink to="/gallary" ><li className="text-green-800 font-bold">Gallary</li></NavLink>                            
<NavLink to="/contact" ><li className="text-green-800 font-bold">Contact</li></NavLink>                            
      </ul>

            </div>
            <div>
                <button className="bg-red-600 w-20 rounded-sm text-blue-50">Profile</button>
            </div>
            <div className="handclick">
                <button  onClick={handletog}className="bg-green-800">click</button>
            </div>
        </div>



        </nav>

      




     

        
        
        </>
    )
}

export default Head;