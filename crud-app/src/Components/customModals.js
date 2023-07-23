import React from 'react'
import "./customModal.css"
import { useSelector } from 'react-redux'

export default function CustomModals({id,showPopUp,setShowPopUp}) {

  const allUsers = useSelector((state)=>state.user.users)
  console.log(allUsers,"allusers")
  const singleUsers = allUsers.filter((ele)=>ele.id===id)
  console.log("singleusers",singleUsers)
  return (
    <div className='modalBackground '>
      <div className='modalContainer'>
      <button  onClick={()=>{
        setShowPopUp(false)
      }}>
        close
      </button>
    
      <h2>{singleUsers[0].name}</h2>
      <p>{singleUsers[0].email}</p>
      <p>{singleUsers[0].gender}</p>
      {console.log(singleUsers.name)}
      </div>
   

    </div>
  )
}

