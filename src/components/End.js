import React, { useState } from "react";
import "./End.css";
import tick from "./tick.jpg";
function End() {
  return (
    <div class="submited">
      <img src={tick} class="img" alt="logo"></img>
      <div class="success">
        Your Query have been succesfully submitted
        <br></br>
        we will shortly resolve your query and get back to you
      </div>
    </div>
  );
}
export default End;
