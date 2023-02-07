import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {adduser } from "../Store/AddUaer-slice";
import User from "./User";
import { number } from "yup/lib/locale";
import { toast  } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MyForm = () => {
  
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    fullname: yup.string().required("Your Full Name is Required!"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(""),
      phoneNumber:yup.string().max(11).min(11).required(),
      nationalCode:yup.string().max(10).min(10).required()
      
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const {users} = useSelector((state) => state.cal) 
  
  const onSubmit = (data) => {
  const repeatedNumber = users.some((user) => user.phoneNumber === data.phoneNumber);
  const repeatedNationalCode= users.some((user) => user.nationalCode === data.nationalCode)
  const repeatedEmail = users.some((user) => user.email === data.email)
  console.log(users)

  
  if(repeatedNumber){

  
// setRepeatedNumber("repeated number, try again")
   toast.error("wrong number" ,{
    position: toast.POSITION.TOP_LEFT,
    className: ''
   });
    console.log("wrong number")
  }
  else{
   
    console.log("seccesfull number")
  }

  if(repeatedNationalCode){
 
  
    toast.error("wrong NationalCode" ,{
      position: toast.POSITION.TOP_LEFT,
      className: ''
     });
    
   
    console.log("wrong natonal code")
  }
  else{
    
    console.log("succesfuul code")
  }

  
  if(repeatedEmail){
   
    
  
    toast.error("wrong Email" ,{
      position: toast.POSITION.TOP_LEFT,
      className: ''
     });
    console.log("wrong email")
  }
  else{
  
    
    console.log("succesfuul email")
  }
  
  if(!repeatedNumber && !repeatedNationalCode && !repeatedEmail){
  
    dispatch(adduser(data))
    toast.success("succesfully!")
  }
    
    console.log(data);
 
  };

  return (
    <>
    <div className="text-3xl text-blue-400 border border-none hover:opacity-80 bg-white w-fit p-3 rounded-xl m-[10px]">
    <Link to="/User"> User </Link>
    </div>
      <div className="flex gap-2 container mx-auto justify-center content-center mt-2">
        {/* Forms */}
        <div className=" ">
         
          <form className=" cart p-2 " onSubmit={handleSubmit(onSubmit)}>
          
          <div className="forms res_menu:ml-44 res_menu:w-[250px]    w-[380px] flex flex-col  border-4 border-b-blue-500 border-r-blue-500   p-3 rounded-lg ">

          <div className="flex flex-col gap-3 ">
            <input className=" "
              type="text"
              placeholder="Full Name..."
              {...register("fullname")}
            />
                <span className="text-red-500 font-bold text-sm" >{errors.fullname?.message}</span>
            </div>
                      
        
            <div className="flex flex-col gap-3">
            <input 
              type="text"
              placeholder="Email..."
              className="mt-1"
              {...register("email")}
            />
               <span className="text-red-500 font-bold">{errors.email?.message}</span>
            </div>
         
           
      
         
      <div className="flex flex-col gap-3">  
              <input 
              type="number"
              placeholder="Age..."
              className="mt-1"
              {...register("age")}
            />
              <span className="text-red-500 font-bold">  {errors.age?.message}</span>
      </div>
            
 {/* <div>{repeatedNumber !== "" && repeatedNumber}</div> */}
            
 <div className="flex flex-col gap-3">  
        <input 
              type="text"
              placeholder="User_number"
              className="mt-1"
              {...register("phoneNumber")}
            />
        <span className="text-red-500 font-bold"> {errors.phoneNumber?.message}</span>
</div>
         
            
               <div className="flex flex-col gap-3">  
               <input 
              type="text"
              placeholder="Wallet number..."
              className="mt-1"
              {...register("nationalCode")}
            />
        <span className="text-red-500 font-bold">{errors.nationalCode?.message}</span>
               
</div>
            <input
              type="submit" 
              className="mt-2 sum font-semibold text-white  w-full hover:opacity-40 hover:transition ease-in delay-150 p-3 rounded-lg"
            />
            
          </div>
         
           

          </form>
        </div>
        {/* Errors */}
        <div className="m-[80px] gap-24 ">
        </div>
      </div>
    </>
  );
};

export default MyForm;

