import React from 'react';
import {  Routes, Route, Link,Redirect, Navigate } from "react-router-dom";
import Signup from './components/Signup';
import User from './components/User';
import { useSelector } from 'react-redux';
import AddUaerSlice from './Store/AddUaer-slice';
import Notfound from './components/Notfound';


const App = () => {
  
  return (
    <div>
   
     <div></div>
    

     <Routes>
       <Route  path="/Signup" element={<Signup />} />
       <Route path="/User" element={<User />} />
       <Route path='/notfound' element={<Notfound />} />
       <Route path='/*'  element={<Navigate to="/notfound" />} />
     </Routes>
     <div>
    
  
     </div>
    </div>
  );
};

export default App;
