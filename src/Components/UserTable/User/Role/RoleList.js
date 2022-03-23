import React from 'react'

function RoleList({user}) {
  return (
    <div className="dropdown">
      <button className="btn btn-white dropdown-toggle" type="button" id="roleDropDown" data-bs-toggle="dropdown" aria-expanded="false">
        <small>
          {user.role}
        </small>
      </button>
      <ul className="dropdown-menu" aria-labelledby="roleDropDown">
        <li>
          <div className="dropdown-item" >
            <small>
              Read
            </small>
          </div>
        </li>
        <li>
          <div className="dropdown-item" >
            <small>
              Manager
            </small>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default RoleList