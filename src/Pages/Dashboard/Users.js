import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRaw from "./UserRaw";

const Users = () => {
  const { data: users, isLoading } = useQuery("users", () =>
    fetch("http://localhost:5000/users").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRaw user={user} key={user._id}></UserRaw>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
