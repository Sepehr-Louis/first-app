import React from 'react';
import Signup from './Signup'
import { useSelector } from 'react-redux';
import {  Routes, Route, Link } from "react-router-dom";
const User = () => {
    const {users} = useSelector((state) => state.cal)
    console.log(users)
    return (
        <div>
            <div className="text-3xl text-blue-400 border border-none hover:opacity-80 bg-white w-fit p-3 rounded-xl m-[10px]">
            <Link to="/Signup"> Signup </Link>
            </div>
           <div>
            {users.map((user) =>{
              return (
                <div className="  ">
                    <div className='cart_user border border-none rounded-lg mx-auto m-[20px] flex user:block user:w-fit user:    border-b-4 p-6 w-[95%]  text-white text-xl '>
                <h1><span>Fullname : </span>{user.fullname}</h1>
                <h1><span>Email: </span>{user.email}</h1>
                <h1><span>Age : </span>{user.age}</h1>
                <h1><span>PhoneNumber : </span>{user.phoneNumber}</h1>
                <h1><span>NationalCode : </span>{user.nationalCode}</h1>
               </div>
               </div>
               
              )
            })}
           </div>
        </div>
    );
};

export default User;