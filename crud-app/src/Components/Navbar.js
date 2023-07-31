/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from "react-router-dom"

import { searchData } from '../features/userDetailSlice';
export default function Navbar() {
  const count = useSelector((state)=>state.user.users)
  const [search,setSearch]=useState("");
  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(searchData(search))
  },[search])
  console.log(search,"search")
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">RTK</a>
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#">Create Post</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/read">All Post ({count.length})</Link>
        </li>
         
        
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setSearch(e.target.value)}/>
        <button class="btn btn-outline-success" type="submit"
        >Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
