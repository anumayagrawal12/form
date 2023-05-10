import React, { useState } from "react";
import "./Sign.css";
import im from "./im.jpg";
import Query from "./Query";
function Sign() {
  const [page, setpage] = useState("login");
  const loginHandler = (events) => {
    setpage("Query");
  };
  if (page == "Query") return <Query></Query>;
  return (
    <div className="first">
      <div class="signup">
        <h1>Sign Up</h1>
        {/* <div class="signup"> */}
        <form id="login" action="" class="inputg">
          <input type="text" class="input-field" placeholder="User ID"></input>
          <input
            type="password"
            class="input-field"
            placeholder="Enter Password"
          ></input>
          <br></br>
          <button type="submit" class="login-btn" onClick={loginHandler}>
            Log in
          </button>
        </form>
      </div>
      <img src={im} class="loginimg" alt="logo"></img>
    </div>
  );
}
export default Sign;
