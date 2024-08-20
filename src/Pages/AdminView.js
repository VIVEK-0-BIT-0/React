import React from 'react';
import styles from './AdminView.module.css';
import { useNavigate } from 'react-router';

export default function AdminView() {
  const navigate=useNavigate();
  function onLogout(){
    alert("Logging Out!");
    navigate("/");
  }
  function handleButtonClick1() {
    alert("Button1 clicked!");
    navigate("\addstudent");
  }
  function handleButtonClick2() {
    alert("Button2 clicked!");
    navigate("\addfaculty");
  }
  function handleButtonClick3() {
    alert("Button3 clicked!");
    navigate("\\viewquery");
  }

  return (
    <div className={styles.adminViewContainer}>
      <header className={styles.header}>
      <div className={styles.logoutContainer}>
      <button onClick={onLogout} className={styles.logoutButton}>
        Logout
      </button>
      </div>
    </header>  
      <h1>Choose an Option</h1>
      <div className={styles.buttonContainer}>
        <button onClick={handleButtonClick1}>Add Student</button>
        <button onClick={handleButtonClick2}>Add Faculty</button>
        <button onClick={handleButtonClick3}>View Query</button>
      </div>
    </div>
  );
};


