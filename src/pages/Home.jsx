import React, { useContext, useEffect } from "react";
import Card from "../components/Card";
import UserContext from "../context/UserContext";
import { fetchUser } from "../context/UserAction";

const Home = () => {
  const { users, dispatch } = useContext(UserContext);

  const getUsers = async () => {
    const data = await fetchUser();
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (users.length === 0) {
    return (
      <h1 className="text-center text-secondary mt-5 display-1">No Users</h1>
    );
  }

  return (
    <div className="container p-4">
      <h1 className="text-center display-1">Users</h1>

      <div className="row mt-3 g-3">
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Home;
