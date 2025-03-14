import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

function Home(){

  const[ cloth , setcloth] =useState([]);
 

  var setting = {
    dots: true,
    infinite: true,
    speed: 400,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  var settin = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  var setti = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };



  const api=async ()=>{
    const getting =await fetch("https://fakestoreapi.com/products");
    const taking = await getting.json();
    console.log(taking);
    setcloth(taking);
  }

  useEffect(()=>{
    api();
  },[])

 

    return(
        <>

        <header>
      <div className=" w-auto   m-8 ">
        <p className="text-2xl text-red-600 font-bold mt-20 mb-3 sm:ml-14 ">N𝐞𝐰 𝐛𝐫𝐚𝐧𝐝𝐬</p>
       <Slider {...setti}>
      <div  >
      <img className=" md:w-44 w-40 object-fill object-center  md:h-[6rem] h-[4rem]  rounded-full" src="https://dynamic.brandcrowd.com/asset/logo/c1f604a8-7778-4f6a-98f4-ba724b9f4848/logo-search-grid-1x?logoTemplateVersion=1&v=638699487171230000" alt="noimage" />
      </div>
     <div   >
     <img className="md:w-44 w-40 object-fill object-center p-1  md:h-[6rem] h-[4rem] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8ca1TBlLjfcg0wOEg7cy0zkITD4ovhGnQA&s " alt="noimage" />
    </div>
    <div   >
     <img className="md:w-44 w-40 object-fill object-center p-1  md:h-[6rem] h-[4rem] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhb5v32dMHdwWw2s9tpDwJFk395ma-g_c9CA&s" alt="noimage" />
    </div>
    <div   >
     <img className="md:w-44 w-40 object-fill object-center p-1  md:h-[6rem] h-[4rem] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJtHpTdyKWdP7tVQXfxZxQnfDy_rkWQoo1A&s " alt="noimage" />
    </div>
    <div   >
     <img className="md:w-44 w-40 object-fill object-center p-1  md:h-[6rem] h-[4rem] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeG3Zdlw1M5EHkBF9Ft8f8XcdN-jmaJfT7mQ0vvcBenFojQqv0LuMuxKuo0p7zj3h9TcQ&usqp=CAU " alt="noimage" />
    </div>
    <div   >
     <img className="md:w-44 w-40 object-fill object-center p-1  md:h-[6rem] h-[4rem] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQogFz_vbXEi8q7f32Ub4vDFY9nha6bn9-w8g&s " alt="noimage" />
    </div>
   
  </Slider>

          </div>

        </header>
   
     <main  className="grid grid-cols-1  w-auto justify-items-center items-center"  >
  <div className="  w-10/12   lg:h-[28rem]  h-[20rem]">
      <Slider {...setting}>
      <div  >
       
    <img className=" w-screen  object-fill object-center lg:h-[28rem] h-[20rem]  " src="https://img.freepik.com/premium-vector/sale-banner-template_107388-275.jpg" alt="noimage" />
    </div>
    <div>
     <img className="w-screen  object-fill object-center lg:h-[28rem] h-[20rem] " src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bf180e2d-5bea-4aeb-8aba-9ea2f09e7aef/deu2up6-8d45c200-e05d-4c5d-b45b-05d01acfc429.jpg/v1/fill/w_1280,h_720,q_75,strp/fashion_sale_web_banner_by_koshaldesign_deu2up6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYmYxODBlMmQtNWJlYS00YWViLThhYmEtOWVhMmYwOWU3YWVmXC9kZXUydXA2LThkNDVjMjAwLWUwNWQtNGM1ZC1iNDViLTA1ZDAxYWNmYzQyOS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Vo7oFfCQJXOWmwvoRDUVCksRun6nQ9gh20-61DnbBOY" alt="noimage" />
    </div>
    <div>
     <img className="w-screen  object-fill object-center lg:h-[28rem] h-[20rem] " src="https://img.freepik.com/free-vector/promotion-fashion-banner_1188-213.jpg?semt=ais_hybrid" alt="noimage" />
    </div>
    <div>
     <img className="w-screen  object-fill object-center lg:h-[28rem] h-[20rem] " src="https://t3.ftcdn.net/jpg/02/11/28/00/360_F_211280049_g8nsjnEXE2383rW14OQ64Rg2WPANojKK.jpg " alt="noimage" />
    </div>
    <div>
     <img className="w-screen  object-fill object-center lg:h-[28rem] h-[20rem] " src="https://storage.googleapis.com/media.craftyartapp.com/uploadedFiles/thumb_file/3a96346d7a3bc66918131a98ca732493b316a7151674533164.jpg" alt="noimage" />
    </div>
    <div>
     <img className="w-screen  object-fill object-center lg:h-[28rem] h-[20rem] " src="https://static.vecteezy.com/system/resources/previews/000/662/994/original/vector-colorful-fashion-sale-banner.jpg" alt="noimage" />
    </div>
   
  </Slider>
      </div>      
     
  </main>
  <section  >
    
  <p className="text-4xl text-blue-600 font-bold mt-12  text-center  p-2">Western wear</p> 
     <div className="flex justify-center items-center ">
    <div className="w-10/12 m-9 ">
        <Slider {...settings}>
      <div className="lg:p-5 m-3 p-1 "  >
       <img className="lg:w-screen lg:h-auto h-52  w-auto    rounded-lg" src="https://cmsimages.shoppersstop.com/Deals_Card_Web_SPYKAR_69f6e47418/Deals_Card_Web_SPYKAR_69f6e47418.png" alt="noimage" />
      </div>
      <div className="lg:p-5 m-3 p-1  ">
       <img className="lg:w-screen lg:h-auto h-52  w-auto  rounded-lg" src="https://cmsimages.shoppersstop.com/Deals_Card_Web_VAN_HEUSEN_87968f16c5/Deals_Card_Web_VAN_HEUSEN_87968f16c5.png" alt="noimage" />
      </div>
      <div className="lg:p-5 m-3 p-1  ">
       <img className="lg:w-screen lg:h-auto h-52  w-auto  rounded-lg" src="https://cmsimages.shoppersstop.com/Deals_Card_Web_Guess_2d345f37e4/Deals_Card_Web_Guess_2d345f37e4.png " alt="noimage" />
      </div>
      <div className="lg:p-5 m-3 p-1  ">
       <img className="lg:w-screen lg:h-auto h-52  w-auto  rounded-lg" src="https://cmsimages.shoppersstop.com/Deals_Card_Web_PEPE_bbffe85c96/Deals_Card_Web_PEPE_bbffe85c96.png " alt="noimage" />
      </div>
      <div className="lg:p-5 m-3 p-1  ">
       <img className="lg:w-screen lg:h-auto h-52  w-auto  rounded-lg" src="https://cmsimages.shoppersstop.com/Deals_Card_Web_Guess_2d345f37e4/Deals_Card_Web_Guess_2d345f37e4.png" alt="noimage" />
      </div >
      <div  className="lg:p-5 m-3 p-1  " >
       <img className="lg:w-screen lg:h-auto h-52  w-auto  rounded-lg" src="https://cmsimages.shoppersstop.com/Deals_Card_Web_LATIN_QUARTER_04ad2c6f77/Deals_Card_Web_LATIN_QUARTER_04ad2c6f77.png" alt="noimage" />
      </div>  
    </Slider>
        </div>
    </div> 
      </section>  


      <section>
        <div className=" grid grid-cols-1 justify-items-center lg:m-10 m-auto items-center lg:w-11/12 w-9/12">
          <img src="https://www.shutterstock.com/image-vector/red-vector-illustration-banner-exclusive-260nw-1414144586.jpg" className="w-screen bg-no-repeat bg-cover object-cover h-72  " alt="noimage" />
        </div>
        
        
        </section>     
     
      <section>

      <p className="text-4xl text-blue-600 font-bold m-10 text-center  p-2">All Products</p>

        <ul className="grid lg:grid-cols-3 shadow-black  grid-cols-2 justify-items-center items-center gap-10 m-4">
          {
            cloth.map((curr)=>{
              return(
                <li key={curr.id}>
                    <NavLink to={`/${curr.id}`}>
                    <img className="w-64 h-64"  src={curr.image} alt="noimage" />
                  <p className="text-center m-1 text-black font-bold text-2xl">{curr.category }</p>
                  <p className="text-center m-1  font-bold text-red-600"> ${curr.price} </p>
                    </NavLink>
                  
                 
                </li>
              )

            })
          }
        </ul>
        
      </section>

      

      <section>
        <div className=" bg-[url(https://nolabels.in/cdn/shop/articles/123-01.jpg?v=1694517027)] bg-no-repeat bg-cover bg-fixed bg-center w-screen h-80">

         
        </div>

        <div >

    <p className="text-4xl text-blue-600 font-bold m-10 text-center  p-2">All Products</p>
       

<ul className="grid lg:grid-cols-3 grid-cols-2 justify-items-center m-3 items-center gap-10 ">
  {
    cloth?.map((curr)=>{
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

      {/* <section className=" bg-[url(https://static.vecteezy.com/system/resources/thumbnails/028/714/271/small/fashion-week-male-model-isolated-on-gradient-background-with-a-place-for-text-photo.jpg)] bg-cover w-screen h-96 object-cover  bg-no-repeat " > */}
       
     

       
      {/* </section> */}
   
      <section>
      <p className="text-4xl text-blue-600 font-bold m-10 text-center  p-2">Top brands</p> 
        <div className=" overflow-hidden whitespace-nowrap m-10">
           
                <div className="innerslide flex gap-3 ">
                < img className="w-48 h-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8WPY0l9ZeOPUvwxzuBjhCdEl4Q0c20z_PfA&s" alt="noimage" />
                < img className="w-48 h-48" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_xvsk6KCtPy20AGrMttJBkvvFAJwgN-eQow&s" alt="noimage" />
                < img className="w-48 h-48" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGT-3K1UsEbgPJ79SJNMgFC6p6ZV76HUWEg&s" alt="noimage" />
                < img className="w-48 h-48" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6T6mRniGfaKJO5nxJDqRViwnns8iH_F-vxA&s" alt="noimage" />
                < img className="w-48 h-48" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSll07v7-3_DVoMIBVlhLfl7i8RUQsJtTZcNA&s" alt="noimage" />
                < img className="w-48 h-48" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHh0pOFoJ6ymr8s_hBWAstswhR5QDPdx1eyQ&s" alt="noimage" />

                < img className="w-48 h-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6T6mRniGfaKJO5nxJDqRViwnns8iH_F-vxA&s" alt="noimage" />
                < img className="w-48 h-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnsjhFU4EzZP2e7A4vrQ3318LVpgvl57HACQ&s" alt="noimage" />
                < img className="w-48 h-48" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEq0x97gRzQiDCLUsUebInKi_WAYECdQDVw&s" alt="noimage" />
                < img className="w-48 h-48" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7KjIS5x6NlA8vHV7rsIfqekmlCSJ7CvSkbQ&s" alt="noimage" />
                < img className="w-48 h-48" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXyOOExhGvDLjwEtx_d0vsK8lVEy7HK2r-SPcPxcwmEiTDPUuhcuFuMUy_qERfniu_w9o&usqp=CAU" alt="noimage" />
                < img className="w-48 h-48" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFytcBTsX9bQ8cRKfAPXUIuVfq0V7K_HIeJA&s" alt="noimage" />

                < img className="w-48 h-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_xvsk6KCtPy20AGrMttJBkvvFAJwgN-eQow&s" alt="noimage" />
                < img className="w-48 h-48" src=" https://polamarketing.com/wp-content/uploads/2024/09/On_Model-17-scaled.jpg" alt="noimage" />
                < img className="w-48 h-48" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzGVq4htX4EUYtLCPPQevZKB7XFwFDCXGog&s" alt="noimage" />
                < img className="w-48 h-48" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQobdYUlb_0l3EKMNv_F3otWzI4PX6w7XQzJm_jlhvAr1XgtN0DlF8o4v--OX2pEn-VGls&usqp=CAU" alt="noimage" />
                < img className="w-48 h-48" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqa2xpO7DwQgLJOeBqc-iGq3wh9H30NP7u6A&s" alt="noimage" />
                < img className="w-48 h-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvKPRCXPPFr_CPXbCN_SYNrsojTgAUVnza1g&s" alt="noimage" />

                < img className="w-48 h-48" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_xvsk6KCtPy20AGrMttJBkvvFAJwgN-eQow&s" alt="noimage" />
                < img className="w-48 h-48" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT2uMOGx4FsM_9FUwW3TiqgCtxf-E7v4CvDTtDZbExLjDkyLbNcjsFCMF6zvjCelVM7LI&usqp=CAU" alt="noimage" />
                < img className="w-48 h-48" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOjvSwdEq5qXXokxfZCaj5fEpLSLvKc6UAg&s" alt="noimage" />
                < img className="w-48 h-48" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfgIlIh5-BtCS9IEQhaJYn5AH4D3V5SXx5_g&s" alt="noimage" />
                < img className="w-48 h-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKWDVbmJWzxTqr4t_3S3D2Nt50y2vD-Ty9fQ&s" alt="noimage" />
                < img className="w-48 h-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfnLaxJw-QTf5Pg44scpbzesHB5ub7OjJpIw&s" alt="noimage" />


                </div>
        </div>
        </section >
      
    

  <section>

  <p className="text-4xl text-blue-600 font-bold m-10 text-center  p-2">Summer Exclusive</p>

    <div className=" lg:m-20 m-2  ">
       <div  className="m-10">
      <Slider {...settings}>
      <div className="lg:p-2 p-1" >
       <img className="w-screen lg:h-auto h-52  rounded-full" src="https://img.freepik.com/free-photo/woman-model-business-suit-wearing-hat_1303-17693.jpg?semt=ais_hybrid " alt="noimage" />
      </div>
      <div className="lg:p-2 p-1">
       <img className="w-screen lg:h-auto h-52  rounded-full" src="https://img.freepik.com/free-photo/woman-model-business-suit-wearing-hat_1303-17693.jpg?semt=ais_hybrid " alt="noimage" />
      </div>
      <div className="lg:p-2 p-1">
       <img className="w-screen lg:h-auto h-52  rounded-full" src="https://img.freepik.com/free-photo/woman-model-business-suit-wearing-hat_1303-17693.jpg?semt=ais_hybrid " alt="noimage" />
      </div >
      <div className="lg:p-2 p-1">
       <img className="w-screen lg:h-auto h-52  rounded-full" src="https://img.freepik.com/free-photo/woman-model-business-suit-wearing-hat_1303-17693.jpg?semt=ais_hybrid " alt="noimage" />
      </div>
      <div className="lg:p-2 p-1">
       <img className="w-screen lg:h-auto h-52  rounded-full" src="https://img.freepik.com/free-photo/woman-model-business-suit-wearing-hat_1303-17693.jpg?semt=ais_hybrid " alt="noimage" />
      </div >
      <div className="lg:p-2 p-1">
       <img className="w-screen lg:h-auto h-52  rounded-full" src="https://img.freepik.com/free-photo/woman-model-business-suit-wearing-hat_1303-17693.jpg?semt=ais_hybrid " alt="noimage" />
      </div>  
    </Slider>

      </div> 
      

      <div>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/008/837/926/small/summer-sale-poster-and-banner-template-with-colorful-float-on-water-in-the-tiled-pool-background-sale-banner-design-for-summer-in-flat-lay-styling-promotion-and-shopping-template-for-summer-and-pool-vector.jpg"  className="bg-no-repeat bg-cover w-11/12 h-64 lg:m-10  m-3 " alt="noimage" />

      </div>
    </div>
    
    </section>      
        </>
    )
}

export default Home;