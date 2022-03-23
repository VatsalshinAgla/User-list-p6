import React from 'react'
import RoleList from './RoleList';



function Role({ user }) {
  if (user.role === "Owner") {
    return (
      <small>
        <strong>
          {user.role}
        </strong>
      </small>
    );
  } else {
    return (<RoleList user={user} />);
  }
}

export default Role