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
    const [radio,setRadio]=useState("");
    const [id,setId]=useState();
  const {users,loading,searchData} =useSelector((state)=>state.user)
  if(loading){
    return<h2>Loading....</h2>
  }
  return (
    <>
   {showPopUp && <CustomModals id={id} showPopUp={showPopUp} setShowPopUp={setShowPopUp}/>} 
   <div class="form-check form-check-inline">
    <h2> All data</h2>
          <input
            class="form-check-input"
            type="radio"
            name="gender"
           checked={radio === ""}
          
           
          />
          <label class="form-check-label">All</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="gender"
            checked={radio === "Male"}
            value="Male"
            onChange={(e)=>setRadio(e.target.value)}
          
          />
          <label class="form-check-label">Male</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="gender"
            checked={radio === "Female"}
            value="Female"
            onChange={(e)=>setRadio(e.target.value)}
          
          />
          <label class="form-check-label">Female</label>
        </div>
      <div
        style={{
         textAlign:"center",
          marginTop: "30px",
         
        }}
      >
        {users &&
         users.filter((ele)=>{
          console.log(ele,"ele")
          if(searchData.length === 0){
            return ele
          }else{
          return ele.name.toLowerCase().includes(searchData.toLowerCase()); 
          }
         })
        .filter((ele) => {
          if(radio === "Male"){
            return ele.gender === radio;
          }else   if(radio === "Female"){
            return ele.gender === radio;
          }else return ele;
        })
        .map((ele)=>{
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
