import React from "react";

function Contact(){
    return(
        <>
   <section>
    <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center ">
        <div className="m-20">
        <iframe  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d55995.98520451026!2d77.3589593866748!3d28.69715178341983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smonanagar!5e0!3m2!1sen!2sin!4v1740743241882!5m2!1sen!2sin"  className="lg:w-[30rem] lg:h-[30rem] w-80 h-80 p-5 " style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
        {/* <div>
        <p className="text-5xl text-green-800 underline text-center  font-bold animate-bounce">Contact </p><br/>
        </div>
       */}
        <div className=" flex justify-items-center  items-center      m-16">
           
            <form  action="https://formspree.io/f/mnnpepvb" method="POST">
                
                <label htmlFor="name" className="text-center" >Name</label><br/><br/>
                < input className="hover:bg-green-300 bg-green-200" name="username" id="name" type="text" placeholder="Name" /><br/><br/>
                <label  className="text-center" htmlFor="email" >Email</label><br/><br/>
                < input className="hover:bg-green-300 bg-green-200" name="email" type="email" placeholder="Email"/><br/><br/>
                <label  className="text-center" htmlFor="message" >Message</label><br/><br/>
                <textarea  id="message" className="hover:bg-green-300 bg-green-200" name="description" row="30" cols="20" placeholder="Message" /><br/><br/>
                <button className="bg-green-800 w-20 rounded" type="submit">Submit</button>
            </form>

        </div>
    </div>
   </section>
        
        
        </>
    )
}

export default Contact;