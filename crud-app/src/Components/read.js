import React, { useEffect, useState } from "react";
import { deleteUser, showUser } from "../features/userDetailSlice";
import { useDispatch, useSelector } from "react-redux";
import CustomModals from "./customModals";
import { Link } from "react-router-dom";
export default function Read() {
    const dispatch =useDispatch();
    useEffect(()=>{
    dispatch(showUser())
    },[])
    const [showPopUp,setShowPopUp]=useState(false);

    const [id,setId]=useState();
  const {users,loading} =useSelector((state)=>state.user)
  if(loading){
    return<h2>Loading....</h2>
  }
  return (
    <>
   {showPopUp && <CustomModals id={id} showPopUp={showPopUp} setShowPopUp={setShowPopUp}/>} 
  
      <div
        style={{
         textAlign:"center",
          marginTop: "30px",
         
        }}
      >
        {users && users.map((ele)=>{
         return(
<div class="card" key={ele.id} style={{ width: "60rem" ,margin:"0 auto", marginBottom:"12px"}}>
          <div class="card-body" >
            <h5 class="card-title">{ele.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{ele.email}</h6>
            {/* <p class="card-text">
            {ele.age}
            </p> */}
            <p class="card-text">
            {ele.gender}
            </p>
            <button onClick={()=>[setId(ele.id),setShowPopUp(true)]
            }>
             View
            </button>
            <Link to={`/edit/${ele.id}`} style={{marginLeft:"20px",marginRight:"20px"}}>
             Edit
            </Link>
            <Link onClick={()=>dispatch(deleteUser(ele.id))}>
            Delete
            </Link>
          </div>
        </div>
         )
        })}
        
      </div>
    </>
  );
}
