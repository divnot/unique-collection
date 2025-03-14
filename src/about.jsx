
import React, { useEffect } from "react";
//import data from "./slider.json"
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";

function About(){

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 3,
        slidesToScroll: 1
      };
     
      var setting = {
        dots: true,
        infinite: true,
        speed: 400,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      var setti = {
   
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
      };


      const about= async()=>{
        const aboutcloth= await fetch("https://fakestoreapi.com/products");
        const aboutcloth1= await aboutcloth.json();
        console.log(aboutcloth1);
        return aboutcloth1;

      }

      // useEffect(()=>{
      //   about();
      // },[])


      const {data, isloading}=useQuery({
        queryKey:["/posts"],
        queryFn:about,
      })

      if(isloading){
        return(
          <p>.....loadingg</p>
        )
      }

      console.log(data);
     
   
    return(
        <>

<header>
     
      <div className=" w-auto m-10">
      <p className="text-2xl text-red-600 font-bold mt-20 mb-3">N𝐞𝐰 𝐛𝐫𝐚𝐧𝐝𝐬</p>
       <Slider {...setti}>
       <div  >
      <img className=" md:w-44 w-40 object-fill object-center  md:h-[6rem] h-[4rem]  rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2yaOYQybkKzKTsqWgl1v0TzvSsRUAc-EuIA&s" alt="noimage" />
      </div>
     <div   >
     <img className="md:w-44 w-40 object-fill object-center p-1  md:h-[6rem] h-[4rem] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsTItDtaI5jtmUwMJaaQMtPoLrWpCdrJArA&s " alt="noimage" />
    </div>
    <div   >
     <img className="md:w-44 w-40 object-fill object-center p-1  md:h-[6rem] h-[4rem] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhb5v32dMHdwWw2s9tpDwJFk395ma-g_c9CA&s" alt="noimage" />
    </div>
    <div   >
     <img className="md:w-44 w-40 object-fill object-center p-1  md:h-[6rem] h-[4rem] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjbeOj6F7CDaznDnpAsFoOfJ6uMD-Zv8eyqT4B71_g2AG2rdgWQfvEZt8uRoWusOHKaoY&usqp=CAU " alt="noimage" />
    </div>
    <div   >
     <img className="md:w-44 w-40 object-fill object-center p-1  md:h-[6rem] h-[4rem] rounded-full" src="data:image/png;base64,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 " alt="noimage" />
    </div>
    <div   >
     <img className="md:w-44 w-40 object-fill object-center p-1  md:h-[6rem] h-[4rem] rounded-full" src="data:image/png;base64,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 " alt="noimage" />
    </div>
  </Slider>

          </div>

        </header>
   
   
     <section >
  
    <div className="grid grid-cols-1 justify-items-center items-center">
    <div className=" w-10/12  lg:h-[28rem] h-[20rem]  ">
        <Slider {...setting}>
      <div>
       <img className="w-screen lg:h-[28rem]  h-[20rem] " src="https://images-static.nykaa.com/uploads/b6abc19e-83e9-4866-ae63-0b3a18abd047.jpg?tr=cm-pad_resize,w-600 " alt="noimage" />
      </div>
      <div>
       <img className="w-screen lg:h-[28rem]  h-[20rem]" src="https://m.economictimes.com/thumb/msid-102379991,width-1600,height-900,resizemode-4,imgsize-48662/sl_600x450.jpg " alt="noimage" />
      </div>
      <div>
       <img className="w-screen lg:h-[28rem]  h-[20rem]" src="https://assetscdn1.paytm.com/images/catalog/view_item/661494/1602832062320.png?imwidth=1600&impolicy=hq" alt="noimage" />
      </div>
      <div>
       <img className="w-screen lg:h-[28rem]  h-[20rem]" src="https://grabsparks.com/wp-content/uploads/2015/08/Flipkart-Fashion-Sale-Mens-30-to-70.jpg " alt="noimage" />
      </div>
      <div>
       <img className="w-screen lg:h-[28rem]  h-[20rem]" src="https://i.pinimg.com/736x/9c/74/7e/9c747e2db7f8be2a4fa78949a62e5922.jpg " alt="noimage" />
      </div>
      <div>
       <img className="w-screen lg:h-[28rem]  h-[20rem]" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/new-collection-fashion-sale-social-media-ad-t-design-template-ad1bd52c15417b89753ad4fd6ff4f867_screen.jpg?ts=1605451933" alt="noimage" />
      </div>
     
    </Slider>
        </div>
    </div>      
    </section>
    
     
     <section >
     <p className="text-4xl text-blue-600 font-bold m-10 text-center  p-2">Western wear</p>
    <div className="flex justify-center items-center">
    <div className=" w-10/12 ">
        <Slider {...settings}>
      <div className="p-2">
       <img className="w-screen lg:h-auto h-48 " src="https://cmsimages.shoppersstop.com/Selected_web_9335e9e774/Selected_web_9335e9e774.png " alt="noimage" />
      </div>
      <div className=" p-2">
       <img className="w-screen lg:h-auto h-48" src="https://cmsimages.shoppersstop.com/Gas_web_b2912db1c3/Gas_web_b2912db1c3.png " alt="noimage" />
      </div>
      <div className="p-2">
       <img className="w-screen lg:h-auto h-48" src="https://cmsimages.shoppersstop.com/Gant_web_9ca4c19556/Gant_web_9ca4c19556.png " alt="noimage" />
      </div >
      <div className=" p-2">
       <img className="w-screen lg:h-auto h-48" src="https://cmsimages.shoppersstop.com/True_Religion_web_074a2cfab9/True_Religion_web_074a2cfab9.png " alt="noimage" />
      </div>
      <div className=" p-2">
       <img className="w-screen lg:h-auto h-48" src="https://cmsimages.shoppersstop.com/Dockers_web_52eb8fe329/Dockers_web_52eb8fe329.png " alt="noimage" />
      </div >
      <div className=" p-2">
       <img className="w-screen lg:h-auto h-48" src="https://cmsimages.shoppersstop.com/Superdry_web_9c72167b48/Superdry_web_9c72167b48.png" alt="noimage" />
      </div>  
    </Slider>
        </div>
    </div>
    </section>
    

    <section className="mt-10">
      <div className="p-5">
      <video width="100%" height="100%" autoPlay muted controls>
  <source src="https://videos.pexels.com/video-files/3917745/3917745-sd_960_506_25fps.mp4" type="video/mp4"/>
 
   </video>
      </div>
    </section>

    <section>
    <p className="text-4xl text-blue-600 font-bold m-10 text-center  p-2">All Products</p>
    <div className="m-5">
    <ul className="grid lg:grid-cols-3 grid-cols-2 justify-items-center items-center   gap-5">
          {
            data?.map((curr)=>{
              return(
                <li  key={curr.id}>
                   <NavLink to={`/${curr.id}`}>
          <img className="w-64 h-64"  src={curr.image} alt="noimage" />
          <p className="text-center m-1 text-black font-bold text-2xl">{curr.category }</p>
          <p className="text-center m-1 font-bold text-red-600"> ${curr.price} </p>
                   
                   </NavLink>
                </li>

              )
            })
          }
        </ul>

    </div>
       
    </section>

    <section>
    <p className="text-4xl text-blue-600 font-bold m-10 text-center  p-2">Top brands</p> 
        <div className=" overflow-hidden whitespace-nowrap">
           
                <div className="innerslide flex gap-3 ">
                < img className="w-44 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />
                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />
                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />
                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />
                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />
                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />

                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />
                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />
                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />
                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />
                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />
                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />

                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />
                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />
                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />
                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />
                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />
                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />

                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />
                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />
                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />
                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />
                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />
                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />


                </div>
        </div>
      </section>

    <section>
    <p className="text-4xl text-blue-600 font-bold m-10 text-center  p-2">Summer Exclusive</p>
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center m-5">
            <div>
                <img className="w-96" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWjjkI2nq6G1gHbees_43XOQ-EzFXqVi4Bmg&s" alt="noimage" />
            </div>
            <div className="pt-1">

                <img className="w-12 animate-bounce " src="https://www.svgrepo.com/show/358717/logo-github.svg" alt="noiamge" />
                <p className="text-3xl font-bold text-green-600">Zuca</p>
                <p className="text-3xl font-bold text-green-600">UP TO 50% OFF</p>
            </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center m-5">
            <div  className="pt-3">
                <img className="w-12 animate-bounce " src="https://www.svgrepo.com/show/358717/logo-github.svg" alt="noiamge" />
                <p className="text-3xl font-bold text-green-600">Zuca</p>
                <p className="text-3xl font-bold text-green-600">UP TO 50% OFF</p>
            </div>
            <div className="midimg" >
                <img className="w-96" src="data:image/jpeg;base64,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" alt="noimage" />
            </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center  items-center m-5">
            <div>
                <img className="w-96" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhy3NfI9jfULnBjCBxMJwzwGD596zSIVXNA&s" alt="noimage" />
            </div>
            <div className="pt-3">
                <img className="w-12  drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] animate-bounce " src="https://www.svgrepo.com/show/358717/logo-github.svg" alt="noiamge" />
                <p className="text-3xl font-bold text-green-600">Zuca</p>
                <p className="text-3xl font-bold text-green-600">UP TO 50% OFF</p>
            </div>
        </div>
    </section>

  { /*   <section>

        <p className="text-4xl text-green-800 font-bold underline text-center p-2">LMV Wear's</p>

       
        <Slider {...settings}> 
        {
          
            data.map((data1)=>{
               return(
                <div className="  bg-white m-2    ">
                     <div className=" p-32  " key={data1.id}>
                  <img src={data1.image} alt="noimage" />
                </div>
               

                </div>
              
               
               )
              
            })
           
        }
          </Slider>
      

    </section>   */}

<section>

  <p className="text-4xl text-blue-600 font-bold m-10 text-center  p-2">Summer Exclusive</p>

    <div className="lg:m-20 m-2  ">
      <div className="w-10/12 lg:m-20 m-8 " >
      <Slider {...settings}>
      <div className="lg:p-2 p-1" >
       <img className="w-screen lg:h-auto h-52  rounded-full" src="https://i.pinimg.com/736x/6f/3b/8d/6f3b8d1e10ba0733fdc38079fa8cedbc.jpg " alt="noimage" />
      </div>
      <div className="lg:p-2 p-1">
       <img className="w-screen lg:h-auto h-52  rounded-full" src="https://i.pinimg.com/736x/6f/3b/8d/6f3b8d1e10ba0733fdc38079fa8cedbc.jpg" alt="noimage" />
      </div>
      <div className="lg:p-2 p-1">
       <img className="w-screen lg:h-auto h-52  rounded-full" src="https://i.pinimg.com/736x/6f/3b/8d/6f3b8d1e10ba0733fdc38079fa8cedbc.jpg " alt="noimage" />
      </div >
      <div className="lg:p-2 p-1">
       <img className="w-screen lg:h-auto h-52  rounded-full" src="https://i.pinimg.com/736x/6f/3b/8d/6f3b8d1e10ba0733fdc38079fa8cedbc.jpg " alt="noimage" />
      </div>
      <div className="lg:p-2 p-1">
       <img className="w-screen lg:h-auto h-52  rounded-full" src="https://i.pinimg.com/736x/6f/3b/8d/6f3b8d1e10ba0733fdc38079fa8cedbc.jpg " alt="noimage" />
      </div >
      <div className="lg:p-2 p-1">
       <img className="w-screen lg:h-auto h-52  rounded-full" src="https://i.pinimg.com/736x/6f/3b/8d/6f3b8d1e10ba0733fdc38079fa8cedbc.jpg" alt="noimage" />
      </div>  
    </Slider>

      </div>

      <div>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/044/854/564/small/summer-flash-sale-podium-display-pile-of-sand-coconut-tree-beach-umbrella-beach-chair-beach-ball-sunglasses-banner-design-vector.jpg"  className="bg-no-repeat bg-cover w-11/12 lg:m-10  h-56 m-3 " alt="noimage" />

      </div>
    </div>
    
    </section>      
       
        </>
    )
}

export default About;

