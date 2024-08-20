import React, { useState,useEffect } from "react";
import styles from "./ResultView.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const rightAlignedStyle = {
  textAlign: 'right',
};

export default function ResultView() {
  const[results,setResults]=useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const studentID = localStorage.getItem("studentID");
      const semester = localStorage.getItem("sem");

      try {
        const response = await axios.post(
          "http://localhost:8085/api/v1/result/fetch",
          {
            sem: semester,
            student_id: studentID,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);  
        if (response.status === 200) {
          const data = response.data;
          if (data !== null) {
            setResults(data);
          } else {
            console.log("No records found");
          }
        }
      } catch (err) {
        console.error("Error: " + err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.result}>    
    <h1 style={rightAlignedStyle}><Link to=".." relative='path'>Back</Link></h1>
    <h1>Result View Page</h1>
    <h1>USN:{localStorage.getItem("studentID")}        Sem:{localStorage.getItem("sem")}</h1>
    <div className={styles.resultViewContainer}>
        {results && results.length > 0 ? (
          <table className={styles.resultTable}>
            <thead>
              <tr>
                <th>Subject Name</th>
                <th>Internal Marks</th>
                <th>External Marks</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {results.map((res, index) => (
                <tr key={index}>
                  <td>{res.course}</td>
                  <td>{res.internal}</td>
                  <td>{res.external}</td>
                  <td>{res.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1>No Records found</h1>
        )}
      </div>
    </div>
  );
}
 