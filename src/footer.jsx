import React from "react";

function Footer(){
    return(
        <>
        <div className="h-auto bg-[#504949]  ">
        <div className="grid lg:grid-cols-3  grid-cols-1 justify-items-center  items-center">
        <div>
            <p className="font-bold text-center underline text-2xl text-yellow-400 m-5">Details</p>
            <ul className="text-center">
           <li className="text-white font-bold">Location</li>
           <li className="text-white font-bold">WhatsApp</li>
           <li className="text-white font-bold">About</li>
           <li className="text-white font-bold">Mail</li>
           <li className="text-white font-bold">Deltax</li>
           <li className="text-white font-bold">App</li>
           <li className="text-white font-bold">Gallary</li>
           <li className="text-white font-bold">Product</li>
           
            </ul>
        </div>
        <div>
            <p className="font-bold underline text-2xl  m-5 text-yellow-400">Collection</p>
            <ul className="text-center">
                <li className="text-white font-bold">Men</li>
                <li className="text-white font-bold">Women</li>
                <li className="text-white font-bold">Kids</li>
                <li className="text-white font-bold">Traditional</li>
                <li className="text-white font-bold">Men</li>
                <li className="text-white font-bold">Women</li>
                <li className="text-white font-bold">Kids</li>
                <li className="text-white font-bold">Traditional</li>
            </ul>
        </div>
        <div >

           <p className="font-bold text-3xl text-white text-center mt-4 mb-4">Collection-z</p>

           
            <ul className="flex gap-2">
                <li><img className="w-14" src="https://cdn-icons-png.flaticon.com/128/15047/15047587.png" alt="noimage" /></li>
                <li><img className="w-14" src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png" alt="noimage" /></li>
                <li><img className="w-14" src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" alt="noimage" /></li>
                <li><img className="w-14" src="https://images.seeklogo.com/logo-png/49/2/twitter-x-logo-png_seeklogo-492396.png" alt="noimage" /></li>
                <li><img className="w-14" src="https://cdn-icons-png.flaticon.com/128/270/270798.png" alt="noimage" /></li>
            </ul>
        </div>
      </div>
      <hr/>
      <div className="grid lg:grid-cols-2   justify-items-center items-center  grid-cols-1">

      <div className="m-3" >
            <p>© 2025 Good Tribe Private Limited. All rights Reserved.</p>
        </div>
      
      
        <div  className="flex gap-2 m-5   ">
            < img className="w-10 " src="https://cdn-icons-png.flaticon.com/128/7801/7801717.png" alt="noimage" />
            < img className="w-10 " src="https://cdn-icons-png.flaticon.com/128/311/311147.png" alt="noimage" />
            < img className="w-10 " src="https://cdn-icons-png.flaticon.com/128/349/349221.png" alt="noimage" />
            < img className="w-10 " src="https://cdn-icons-png.flaticon.com/128/15449/15449783.png" alt="noimage" />
            < img className="w-10 " src="https://cdn-icons-png.flaticon.com/128/16174/16174514.png" alt="noimage" />
        </div>
       
      </div>

        

        </div>
      
        
        </>
    )
}

export default Footer;