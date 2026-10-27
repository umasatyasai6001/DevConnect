// import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import {useEffect} from "react";
import UserCard from "./UserCard";
import { Base_Url } from "../utils/constants";
import axios from 'axios';
import { addFeed } from "../utils/feedSlice";
const Feed = () => {
  const feed = useSelector((store)=>store.feed);
  const dispatch = useDispatch();
  // const [error,setError] = useState("");
 
  const fetchFeedUser = async ()=>{
    try{
       if(feed) return;
      const res = await axios.get(Base_Url+"/feed", {
        withCredentials:true,
      });
      dispatch(addFeed(res?.data?.data));
      console.log("afterFeed", res.data.data);
    }
    catch(err){

      console.log(err.message);   

    }

  }

  useEffect(()=>{
    fetchFeedUser();
  },[]);
 if (!feed) return;
  if (feed.length <= 0)
    return <h1 className="flex justify-center my-10">No new users founds!</h1>;

  return (
    feed&& (
    <UserCard user= {feed[0]}/>
  )
  )
}

export default Feed;