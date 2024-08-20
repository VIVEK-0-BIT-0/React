import React,{useState} from 'react';
import styles from './Add.module.css';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

export default function AddStudent() {
  const navigate=useNavigate();
  const[id,setId]=useState("");
  const[name,setName]=useState("");
  const[studentid,setStudentid]=useState("");
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
    
        async function handleSubmit(e) {
        e.preventDefault();
       try{
        await axios.post("http://localhost:8085/api/v1/student/save",{
          name:name,
          username:username,
          password:password,
          studentid:studentid,
        });
        alert("Added Student");
        setId("");
        setName("");
        setUsername("");
        setPassword("");
        setStudentid("");
        navigate("/adminlogin/adminview");
       }catch(err){
        alert("Student Registation Failed");
       }
        
      }
    return (
      <div className={styles.container}>
        <h1><Link to=".." relative="path">Back</Link></h1>
        <h1>Add a Student</h1>
    <div className={styles.formContainer}>
        Student Name:
        <input
          type="text"
          id="studentName"
          name="studentName"
          value={name}
          onChange={(event) =>
            {
              setName(event.target.value);      
            }}
          className={styles.formInput}
        />
        USN:
        <input
          type="text"
          id="usn"
          name="usn"
          value={studentid}
          onChange={(event) =>
            {
              setStudentid(event.target.value);      
            }}
          className={styles.formInput}
        />     
        Username:
        <input
          type="text"
          id="userName"
          name="userName"
          value={username}
          onChange={(event) =>
            {
              setUsername(event.target.value);      
            }}
          className={styles.formInput}
        />
        Password:
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) =>
            {
              setPassword(event.target.value);      
            }}
          className={styles.formInput}
        /> 
        <button type="submit" className={styles.submitButton} onClick={handleSubmit}>
        ADD
      </button>
    </div>
    </div>
  );
}
