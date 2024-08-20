import React,{useState} from "react";
import styles from "./Form.module.css";
import MainNavigation from "../Components/MainNavigation";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Faculty() {
  const navigate=useNavigate();
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  async function submitHandler(){

    try{
      const result=await axios.post("http://localhost:8085/api/v1/teacher/login",{
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
          navigate("/facultylogin/facultyview");
        } 
        else{
          console.log(serverMessage);
          alert(serverMessage);
          setUsername("");
          setPassword("");
        }    
      
    }catch(err){
      alert("Login Failed "+err);
      setUsername("");
      setPassword("");
    }
    
  }
  return (
    <div className={styles.faculty}>
      <MainNavigation />
      <p className={styles.paragraph}> LogIn to add/update the results!</p>
      <div className={styles.formContainer}>
        Username:
        <input
          type="text"
          id="username"
          name="username"
          className={styles.formInput}
          onChange={(event) =>
            {
              setUsername(event.target.value);      
            }}
            value={username}
        />
        Password:
        <input
          type="password"
          id="password"
          name="password"
          className={styles.formInput}
          onChange={(event) =>
            {
              setPassword(event.target.value);      
            }}
            value={password}
        />
        <button type="submit" className={styles.submitButton} onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
}
