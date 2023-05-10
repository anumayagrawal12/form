import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./Query.css";
import im2 from "./im2.jpg";
import End from "./End";
function Query() {
  const [enteredValue1, setEnteredValue1] = useState("");
  const [enteredValue2, setEnteredValue2] = useState("");
  const [enteredValue3, setEnteredValue3] = useState(
    "Data Mining and Warehousing"
  );
  const [page, setpage] = useState("login");
  const [valid, setvalid] = useState(true);
  const selectHandler = (event) => {
    setEnteredValue3(event.target.value);
  };
  const inputHandler1 = (event) => {
    // if (event.target.value.trim.length() > 0) {
    // }
    setEnteredValue1(event.target.value);
  };
  const inputHandler2 = (event) => {
    // if (event.target.value.trim.length() > 0) {
    // }
    setEnteredValue2(event.target.value);
  };
  const submitHandler = (event) => {
    console.log("Subject chosen: " + enteredValue3);
    console.log("problem detail: " + enteredValue1);
    console.log("Suggestion: " + enteredValue2);
    setpage("End");
  };
  if (page == "End") return <End></End>;
  return (
    <div class="first">
      <img src={im2} class="loginimg" alt="logo"></img>
      <div class="query">
        <h1>Specify your query</h1>
        {/* <form id="problem" action="" class="inputg"> */}
        <div class="sub">
          <label for="subject">Choose a subject:</label>
          <select name="subjects" id="subjects" onChange={selectHandler}>
            <option value="Data Minig and warehousing">
              Data Minig and warehousing
            </option>
            <option value="Cryptography">Cryptography</option>
            <option value="Artificial Intelligence">
              Artificial Intelligence
            </option>
            <option value="Soft Computing">Soft Computing</option>
            <option value="Information Retrieval">Information Retrieval</option>
          </select>
        </div>
        <p>Specify your problem in detail:</p>
        <textarea
          class="input-field"
          rows="4"
          cols="50"
          onChange={inputHandler1}
        ></textarea>
        <p>Any Suggestion: </p>
        <textarea
          class="input-field"
          rows="4"
          cols="50"
          onChange={inputHandler2}
        ></textarea>
        <br></br>
        <button type="submit" class="submit-btn" onClick={submitHandler}>
          Submit
        </button>
        {/* </form> */}
      </div>
    </div>
  );
}
export default Query;
