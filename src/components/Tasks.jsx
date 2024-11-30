import React from "react";
import "./Users.css";
import { db } from "../firebase";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { useState, useEffect } from "react";
export default function Tasks() {
  const [tasks, setTask] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const taskRef = collection(db, "tasks");
        const snapShot = await getDocs(taskRef);
        const taskData = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTask(taskData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks();
  }, []);
  const formatDate = (timestamp) => {
    if (!timestamp?.seconds) {
      return "N/A"; // Default fallback for missing timestamps
    }
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString();
  };
  return (
    <div className="container">
      <h1>Tasks</h1>
      <table>
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Task Description</th>

            <th>Created By</th>
            <th>Creation Time</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.createdBy}</td>
              <td>{formatDate(task.creationTime)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
