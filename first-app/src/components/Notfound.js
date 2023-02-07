import React from 'react';
import logo from '../image/Hourglass.gif'
import {  Routes, Route, Link,Redirect, Navigate } from "react-router-dom";

const Notfound = () => {
    return (
        <div className="border-[5px] res_menu:left-40   gap-6 rounded-2xl p-4 w-fit flex flex-col items-center mx-auto absolute top-[20%] left-[45%] ">
            <img className="w-fit rounded-full" src={logo}></img>
            <h1 className="text-white font-bold">Not found !</h1>
            <span className="text-3xl text-blue-400 border border-none hover:opacity-80 bg-white w-fit p-3 rounded-xl m-[10px]"><Link to="/Signup"> Signup </Link></span>
          
        </div>
    );
};

export default Notfound;