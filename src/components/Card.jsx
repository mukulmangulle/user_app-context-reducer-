import React from "react";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  return (
    <div className="col-md-6 col-sm-12 col-lg-4">
      <div className="card p-3 rounded-0 shadow-sm border-black">
        <h4 className="card-title">{user.name}</h4>
        <p className="text-secondary">{user.email}</p>
        <Link
          to={`user/${user.id}`}
          className="btn btn-sm btn-secondary rounded-0"
        >
          View User
        </Link>
      </div>
    </div>
  );
};

export default Card;
