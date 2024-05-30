import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

const DeactivatedUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchDeactivatedUsers = async () => {
      try {
        const response = await axios.get(
          "http://192.168.10.25:8181/api/admin/deactivated-users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching deactivated users:", error);
      }
    };
    fetchDeactivatedUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(
        `http://192.168.10.25:8181/api/admin/users/${userId}`
      );
      if (response.status === 204) {
        setUsers(users.filter((user) => user.id !== userId));
        alert("User has been permanently deleted.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="deactivated-users">
      <h2>Deactivated Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeactivatedUsers;
