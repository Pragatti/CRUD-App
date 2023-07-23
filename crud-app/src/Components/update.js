import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../features/userDetailSlice';

export default function Update() {
    const [updateData,setUpdate]=useState()
    const {id} = useParams();
    const {users} = useSelector((state)=>state.user)
     const dispatch =useDispatch();
     const navigate =useNavigate();
    useEffect(()=>{
        if(id){
    const singleUsers = users.filter((ele)=>ele.id===id)
     setUpdate(singleUsers[0])
        }
    },[]);

  const newUsers=(e)=>{
    setUpdate({...updateData,[e.target.name] : e.target.value})
  }
  const handleSubmit=(e)=>{
   e.prevent.default();
   dispatch(updateUser(updateData))
   navigate('/read')
  }
  return (
    <div>
       <div>
      <h2>Edit Data</h2>
      <form className="w-50 mx-auto my-5" 
      onSubmit={handleSubmit}
      >
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            name="name"
            value={updateData && updateData.name}
            onChange={newUsers}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            type="email"
            name="email"
            class="form-control"
            value={updateData && updateData.email}
            onChange={newUsers}
          />
        </div>
        <div>
          <label class="form-label">Age</label>
          <input
            type="number"
            name="age"
            class="form-control"
            value={updateData && updateData.age}
            onChange={newUsers}
          />
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="gender"
            value="Male"
            checked={updateData && updateData.gender=== "male"}
            onChange={newUsers}
          />
          <label class="form-check-label">Male</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="gender"
            value="Female"
            checked={updateData && updateData.gender=== "Female"}
            onChange={newUsers}
          />
          <label class="form-check-label">Female</label>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </div>
  )
}
