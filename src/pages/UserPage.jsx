import React, { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import { fetchSingleUser } from "../context/UserAction";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { dispatch, user } = useContext(UserContext);

  const params = useParams();

  const getUser = async (id) => {
    const data = await fetchSingleUser(id);

    dispatch({
      type: "GET_USER",
      payload: data,
    });
  };

  useEffect(() => {
    getUser(params.id);
  }, []);

  if (!user) {
    return (
      <h1 className="text-center mt-5 display-1 text-secondary">Loading...</h1>
    );
  }

  return (
    <div className="container p-5">
      <h1 className="text-center">Welcome {user.name}</h1>
    </div>
  );
};

export default UserPage;
