import React, { useState, useEffect } from "react";
import "./Users.css";
import { db } from "../firebase";
import { collection, getDocs, Timestamp } from "firebase/firestore";
export default function TaskList() {
  const [taskLists, setTaskLists] = useState([]);
  useEffect(() => {
    const fetchTaskLists = async () => {
      try {
        const taskListRef = collection(db, "taskLists");
        const snapshot = await getDocs(taskListRef);
        const taskListsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTaskLists(taskListsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTaskLists();
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString();
  };

  return (
    <div className="container">
      <h1>Task List</h1>
      <table>
        <thead>
          <tr>
            <th>Task List Title</th>
            <th>Created By</th>
            <th>Task List description</th>
            <th>Creation Time</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {taskLists.map((taskList) => (
            <tr key={taskList.id}>
              <td>{taskList.title}</td>
              <td>{taskList.createdBy}</td>
              <td>{taskList.tasks}</td>
              <td>{formatDate(taskList.creationTime)}</td>
              <td>{formatDate(taskList.lastUpdated)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
