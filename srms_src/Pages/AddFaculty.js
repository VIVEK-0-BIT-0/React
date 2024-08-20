import React,{useState} from 'react';
import styles from './Add.module.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddFaculty() {
    const navigate=useNavigate();
    const[name,setName]=useState("");
    const[designation,setDesignation]=useState("");
    const[username,setUSername]=useState("");
    const[password,setPassword]=useState("");
    
      async function handleSubmit(e){
        e.preventDefault();
        
        try{
          await axios.post("http://localhost:8085/api/v1/teacher/save",{
            name: name,
            username: username,
            password: password,
            designation:designation,
          });
          alert("Added Faculty");
          setName("");
          setDesignation("");
          setUSername("");
          setPassword("");
          navigate("/adminlogin/adminview");
        }catch(err){
          alert("Faculty Registation Failed "+err);
        }
        
      }
  return (
    <div className={styles.container}>
      <h1><Link to=".." relative="path">Back</Link></h1>
      <h1>Add a Faculty</h1>
    <div className={styles.formContainer}>
        Faculty Name:
        <input
          type="text"
          id="facultytName"
          name="facultyName"
          value={name}
          onChange={(event) =>
            {
              setName(event.target.value);      
            }}
          className={styles.formInput}
        />
        Designation:
        <input
          type="text"
          id="designation"
          name="designation"
          value={designation}
          onChange={(event) =>
            {
              setDesignation(event.target.value);      
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
              setUSername(event.target.value);      
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
