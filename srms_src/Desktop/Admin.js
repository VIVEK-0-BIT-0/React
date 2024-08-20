import styles from "./Form.module.css";
import MainNavigation from "../Components/MainNavigation";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Admin() {
  const navigate=useNavigate();
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  async function submitHandler(){
    try{
      const result=await axios.post("http://localhost:8085/api/v1/admin/login",{
        username:username,
        password:password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },});
        const serverMessage = result.data;
        if(serverMessage==="success"){
          console.log(serverMessage);
          setUsername("");
          setPassword("");
          alert("Logging In")
          navigate("\adminview");
        } 
        else{
          console.log(serverMessage);
          alert(serverMessage);
          setUsername("");
          setPassword("");
        }    
      
    }catch(err){
      alert("Login Failed "+err);
    }
    
  }
  return (
    <div className={styles.student}>
      <MainNavigation />
      <p className={styles.paragraph}>
        {" "}
        LogIn to view query.Add student/faculty.
      </p>
      <div className={styles.formContainer}>
        Username:
        <input
          type="text"
          id="username"
          name="username"
          className={styles.formInput}
          value={username}
          onChange={(event) =>
            {
              setUsername(event.target.value);      
            }}
        />
        Password:
        <input
          type="password"
          id="password"
          name="password"
          className={styles.formInput}
          value={password}
          onChange={(event) =>
            {
              setPassword(event.target.value);      
            }}
        />
        <button type="submit" className={styles.submitButton} onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
}
