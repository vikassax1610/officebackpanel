import React, { useState, useEffect } from "react";
import "./Users.css";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
export default function Users() {
  const [userDetail, setUserDetail] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userRef = collection(db, "users");
        const snapShot = await getDocs(userRef);
        const usersData = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUserDetail(usersData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);
  const formatDate = (Timestamp) => {
    const date = new Date(Timestamp * 1000);
    return date.toLocaleString();
  };
  return (
    <div className="container">
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
            <th>signUp time</th>
            <th>IP</th>
          </tr>
        </thead>
        <tbody>
          {userDetail.map((userDetail, index) => (
            <tr key={index}>
              <td>{userDetail.email}</td>
              <td>{userDetail.password}</td>
              <td>{formatDate(userDetail.signupTime)}</td>
              <td>{userDetail.ip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
