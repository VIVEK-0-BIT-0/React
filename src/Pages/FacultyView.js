import React, { useState } from 'react';
import styles from './FacultyView.module.css';
import { useNavigate } from 'react-router-dom';

export default function FacultyView() {
  const [usn, setUsn] = useState('');
  const [sem,setSem] = useState('');
  const [course,setCourse] = useState('');

  const handleUsnChange = (event) => {
    setUsn(event.target.value);
  };

  const handleSemChange = (event) => {
    setSem(event.target.value);
  };

  const handleCourseChange =(event)=>{
    setCourse(event.target.value);
  };

  const handleSubmit1 = () => {
    localStorage.setItem("usn",usn);
    localStorage.setItem("semres",sem);
    localStorage.setItem("course",course);
    alert("Updating result");
    navigate("/facultylogin/facultyview/updateresult");
  };
  const handleSubmit = () => {
    alert("Adding result");
    navigate("\addresult");
  };

  const navigate=useNavigate();
  function onLogout(){
    alert("Logging Out!");
    navigate("/");
  }

  return (
    <div className={styles.facultyViewContainer}>
      <header className={styles.header}>
      <div className={styles.logoutContainer}>
      <button onClick={onLogout} className={styles.logoutButton}>
        Logout
      </button>
      </div>
    </header>  
      <h1>Faculty View Page</h1>
      <h1>Choose an Option</h1>
      <button className={styles.submitButton} onClick={handleSubmit}>
          Add Results
        </button>
      <div className={styles.formContainer}>
        Enter USN:
        <input
          type="text"
          id="usnInput"
          className={styles.formInput}
          value={usn}
          onChange={handleUsnChange}
        />
        Enter SEM:
        <input
          type="text"
          id="usnInput"
          className={styles.formInput}
          value={sem}
          onChange={handleSemChange}
        />
        Enter Course:
        <input
          type="text"
          id="usnInput"
          className={styles.formInput}
          value={course}
          onChange={handleCourseChange}
        />
        <button className={styles.submitButton} onClick={handleSubmit1}>
          Update Results
        </button>
      </div>
    </div>
  );
}


