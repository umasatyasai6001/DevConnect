// import React from 'react'
import Navbar from "./Navbar";
// import Login from "./Login";
// import Profile from "./Profile";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import {useDispatch,useSelector} from "react-redux";
import { Base_Url } from "../utils/constants";
import { useEffect } from "react";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

import axios from "axios";

 const Body = () => {
  const dispatch= useDispatch();
  const navigate= useNavigate();
  const userData = useSelector((store)=>store.user);

  const fetchUser= async ()=>{
    try{
      console.log("before", userData);
      if (userData) return;
  const res= await axios.get(Base_Url+"/profile/view" , {
    withCredentials:true});
    dispatch(addUser(res.data));
    console.log("After", res.data);
    }
    catch(err)
    {
        if (err.status === 401) {
        navigate("/login");
      }
      console.error(err);
    }
    }
  
  useEffect(()=>{
    fetchUser()
  },[])

  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
         
 </div>
  )
}

export default Body;







