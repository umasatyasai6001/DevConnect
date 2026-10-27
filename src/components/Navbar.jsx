
// import React from 'react';

import { useSelector } from "react-redux";
import {Link,useNavigate} from "react-router-dom";
import Kalam from "../assets/Kalam.Jpg";
import { Base_Url } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
const Navbar=()=>{
  //  const navigate = useNavigate();
  const user = useSelector((store)=>store.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("user store", user);

  const handleLogout = async ()=>{
    try{
       await axios.post(Base_Url+"/logout",{},{
        withCredentials:true
      });
      dispatch(removeUser());
      return navigate("/login");

    }
    catch(err)
    {
       console.log(err);
    }

  }


return(
    <>
     <div className="navbar bg-gray-500 shadow-sm">
  <div className="flex-1">
    <Link to ="/" className="btn btn-ghost text-xl">daisyUI</Link>
  </div>
  <div className="flex gap-2">
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full mx-2">
          {/* {
            user && (
              user.photoUrl
            )
          } */}
         <img src ={user?.photoUrl || Kalam}
         alt="Profile"/>         
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile"ClassName="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li onClick={handleLogout}><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    
    
    </>


)

}
export default Navbar;