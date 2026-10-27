

// import Feed from "../components/Feed";
import { useState } from "react";
import { Base_Url } from "../utils/constants";
import  axios from "axios";
import {useDispatch} from "react-redux";
import { removeFeed } from "../utils/feedSlice";


const UserCard = ({user})=>{
    const dispatch = useDispatch();
    const[error,setError] = useState("");
    const { _id,firstName, lastName, photoUrl, age, gender,about} = user;

    const handleSendRequest= async (status,userId)=>{
        try{
            const res= await axios.post(Base_Url+"/request/send/"+status+"/"+userId,{

            },{withCredentials:true});
            dispatch(removeFeed(res?.data?.data))
        }
        catch(err){
            setError(err.message);

        }
    }
    return(
        <div className="card bg-base-100 w-80 shadow-sm justify-center">
  <figure>
    <img
      src={photoUrl}
      alt="Shoes" />
  </figure>
  < div className="card-body">
    <h2 className="card-title">{firstName && lastName && firstName +" "+ lastName }</h2>
    {age && gender && <p>{age + ", " + gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleSendRequest("Ignored", _id)}  className="btn btn-primary">Ignore</button>
      <button onClick={()=>handleSendRequest("interested", _id)}    className="btn btn-primary">Interested</button>

  </div>
</div>
</div>
    )
}

export default UserCard;


