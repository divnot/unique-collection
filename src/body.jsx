import React from "react";
import Head from "./head";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

function Body(){
    return(
        <>

        <Head/>
        <Outlet/>
        <Footer/> 
        </>
    )
}

export default Body;