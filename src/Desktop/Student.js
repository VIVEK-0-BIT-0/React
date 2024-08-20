import styles from "./Form.module.css";
import MainNavigation from "../Components/MainNavigation";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";

export default function Student() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  async function submitHandler(){
    try{
      const result=await axios.post("http://localhost:8085/api/v1/student/login",{
        username:username,
        password:password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },}
        );
        const serverMessage = result.data;
        if(serverMessage.startsWith("success")){
          const studentID=serverMessage.split('=')[1];
          localStorage.setItem('studentID',studentID);
          setUsername("");
          setPassword("");
          alert("Logging In")
          navigate("/studentlogin/result");  
    }
    else{
      console.log(serverMessage);
      alert(serverMessage);
      setUsername("");
      setPassword("");
    }    
  
}
    catch(error){
      console.error("Error:",error.message);
      setUsername("");
      setPassword("");
    }    
  }
  return (
    <div className={styles.student}>
      <MainNavigation />
      <p className={styles.paragraph}> LogIn to access the results!</p>
      <div className={styles.formContainer}>
        Username:
        <input
          type="text"
          id="username"
          name="username"
          className={styles.formInput}
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        Password:
        <input
          type="password"
          id="password"
          name="password"
          className={styles.formInput}
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button type="submit" className={styles.submitButton} onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
}
