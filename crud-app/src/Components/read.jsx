import React, { useEffect } from "react";
import { showUser } from "../features/userDetailSlice";
import { useDispatch } from "react-redux";

export default function Read() {
    const dispatch =useDispatch();
    useEffect(()=>{
    dispatch(showUser())
    },[])
  
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <div class="card" style={{ width: "30rem" }}>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="card-link">
              Card link
            </a>
            <a href="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    </>
  );
}