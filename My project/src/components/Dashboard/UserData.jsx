import React from "react";
import useFetch from "../../hooks/useFetch";
import { getAllUsers } from "../../services/userService";

const UserData = () => {
  const { data, loading, error } = useFetch(getAllUsers);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h2 className="text-xl font-bold mb-4">User Data</h2>
      <ul>
        {data.map((user) => (
          <li key={user.userId} className="mb-4">
            <p className="font-bold">{user.name}</p>
            <p>{user.email}</p>
            <p>Nickname: {user.nickname}</p>
            <p>Joined on: {new Date(user.joinDate).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserData;
