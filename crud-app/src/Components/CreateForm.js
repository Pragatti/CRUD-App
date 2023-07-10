import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { createUser } from '../features/userDetailSlice';
export default function CreateForm() {
  const [users,setUsers] = useState({});
  const {loading} = useSelector(state => state.user)
  const dispatch =useDispatch();
  const getAllUsers=(e)=>{
    setUsers({...users,[e.target.name]:e.target.value})
  
  }
  console.log(loading,'loading')
  console.log(createUser,"createU")
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(users,"users")
    dispatch( createUser(users))
  }

  return (
    <div>
      <form className='w-50 mx-auto my-5' onSubmit={handleSubmit}>
  <div class="mb-3">
    <label class="form-label">Name</label>
    <input type="text" class="form-control"  name='name' onChange={getAllUsers}/>
 </div>
  <div class="mb-3">
    <label  class="form-label">Email</label>
    <input type="email" name="email" class="form-control" onChange={getAllUsers} />
  </div>
  <div>
  <label  class="form-label">Age</label>
    <input type="number" name="age" class="form-control"  onChange={getAllUsers} />
  </div>
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="gender"  value="Male"  onChange={getAllUsers}/>
  <label class="form-check-label" >Male</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="gender"  value="Female"  onChange={getAllUsers}/>
  <label class="form-check-label" >Female</label>
</div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
