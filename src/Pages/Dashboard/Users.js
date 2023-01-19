import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRaw from "./UserRaw";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://doctors-portal-server-drab-one.vercel.app/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
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
          {users?.map((user) => (
            <UserRaw user={user} key={user._id} refetch={refetch}></UserRaw>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
