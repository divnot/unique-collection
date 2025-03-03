import React from "react";

function Footer(){
    return(
        <>
      <div className="grid lg:grid-cols-3 grid-cols-1 justify-items-center bg-black items-center">
        <div>
            <p className="font-bold text-center underline text-2xl text-white">HELP</p>
            <ul className="text-center">
           <li className="text-white font-bold">Location</li>
           <li className="text-white font-bold">WhatsApp</li>
           <li className="text-white font-bold">About</li>
           <li className="text-white font-bold">Mail</li>
           
            </ul>
        </div>
        <div>
            <p className="font-bold underline text-2xl text-white">Collection</p>
            <ul className="text-center">
                <li className="text-white font-bold">Men</li>
                <li className="text-white font-bold">Women</li>
                <li className="text-white font-bold">Kids</li>
                <li className="text-white font-bold">Traditional</li>
            </ul>
        </div>
        <div>
           
            <ul className="flex gap-2">
                <li><img className="w-14" src="https://cdn-icons-png.flaticon.com/128/15047/15047587.png" alt="noimage" /></li>
                <li><img className="w-14" src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png" alt="noimage" /></li>
                <li><img className="w-14" src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" alt="noimage" /></li>
                <li><img className="w-14" src="https://images.seeklogo.com/logo-png/49/2/twitter-x-logo-png_seeklogo-492396.png" alt="noimage" /></li>
                <li><img className="w-14" src="https://cdn-icons-png.flaticon.com/128/270/270798.png" alt="noimage" /></li>
            </ul>
        </div>
      </div>

        
        
        </>
    )
}

export default Footer;