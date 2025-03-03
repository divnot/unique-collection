import React from "react";

function Contact(){
    return(
        <>
   <section>
    <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center">
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d55995.98520451026!2d77.3589593866748!3d28.69715178341983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smonanagar!5e0!3m2!1sen!2sin!4v1740743241882!5m2!1sen!2sin"  className="w-96 h-96 mt-48 mb-48 " style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


        </div>
        <div className="pb-20">
            <p className="text-5xl text-green-800 underline  font-bold animate-bounce">Contact </p><br/>
            <form>
                <label htmlFor="name" >Name</label><br/><br/>
                < input className="hover:bg-green-300 bg-green-200" id="name" type="text" placeholder="Name" /><br/><br/>
                <label htmlFor="email" >Email</label><br/><br/>
                < input className="hover:bg-green-300 bg-green-200" type="email" placeholder="Email"/><br/><br/>
                <label htmlFor="message" >Message</label><br/><br/>
                <textarea  id="message" className="hover:bg-green-300 bg-green-200" row="25" cols="50" placeholder="Message" /><br/><br/>
                <button className="bg-green-800 w-20 rounded" type="submit">Submit</button>
            </form>

        </div>
    </div>
   </section>
        
        
        </>
    )
}

export default Contact;