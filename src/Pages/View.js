import React from 'react';
import styles from './View.module.css';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';

export default function View() {
  const [queriesData, setQueriesData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8085/api/v1/query/view'); 
        if (response.status === 200) {
          const data = response.data;
          setQueriesData(data);
        } else {
          console.log('Error fetching queries');
        }
      } catch (error) {
        console.error('Error: ', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <h1><Link to=".." relative="path">Back</Link></h1>
     <h1>View the queries</h1>   
    <div className={styles.queryViewContainer}>
      
      <table className={styles.queryTable}>
        <thead>
          <tr>
            <th>USN</th>
            <th>Query</th>
          </tr>
        </thead>
        <tbody>
          {queriesData.map((query, index) => (
            <tr key={index}>
              <td>{query.studentId}</td>
              <td>{query.query}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}
