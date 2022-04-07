import React from "react";
import User from "./User/User";
import { useSelector } from "react-redux";

function UserTable() {
  const { users, loading } = useSelector((state) => state.reducer);
  if (loading) {
    return (
      <div className="container-fluid opacity-50">
        <div className={`d-flex justify-content-center loading`}>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <table className="table table-borderless mb-0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Access</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => {
            return <User user={user} key={index} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default UserTable;
