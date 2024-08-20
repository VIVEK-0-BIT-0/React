import React from "react";
import styles from "./Result.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Result() {
  const navigate=useNavigate();
  const student_id=localStorage.getItem("studentID");
  async function buttonHandler(event) {
    const btnval = event.target.value;
    localStorage.setItem("sem",btnval);
    alert(`Fetching Semester ${btnval} results`);     
    navigate("\rresultview");    
  }
  function onLogout(){
    alert("Logging Out");
    navigate("/");
  }
  return (
    <div className={styles.result}>
      <header className={styles.header}>
      <div className={styles.logoutContainer}>
      <button onClick={onLogout} className={styles.logoutButton}>
        Logout
      </button>
      </div>
    </header>  
      <div className={styles.resultContainer}>
        <h1>USN:{student_id}</h1>
        <h1>Result Page</h1>
        <div className={styles.buttonContainer}>
          <button
            className={styles.resultButton}
            value="1"
            onClick={buttonHandler}
          >
            Semester 1
          </button>
          <button
            className={styles.resultButton}
            value="2"
            onClick={buttonHandler}
          >
            Semester 2
          </button>
          <button
            className={styles.resultButton}
            value="3"
            onClick={buttonHandler}
          >
            Semester 3
          </button>
          <button
            className={styles.resultButton}
            value="4"
            onClick={buttonHandler}
          >
            Semester 4
          </button>
          <button
            className={styles.resultButton}
            value="5"
            onClick={buttonHandler}
          >
            Semester 5
          </button>
          <button
            className={styles.resultButton}
            value="6"
            onClick={buttonHandler}
          >
            Semester 6
          </button>
          <button
            className={styles.resultButton}
            value="7"
            onClick={buttonHandler}
          >
            Semester 7
          </button>
          <button
            className={styles.resultButton}
            value="8"
            onClick={buttonHandler}
          >
            Semester 8
          </button>
        </div>
      </div>
    </div>
  );
}
