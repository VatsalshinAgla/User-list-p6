import React from 'react';
import User from './User/User';
import { useSelector } from 'react-redux';

function UserTable() {
    const users = useSelector(state => state.reducer.users);
    console.log(users);
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
                {
                    users.map((user,index ) => {
                        return (
                            <User  user={user} key={index} />
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default UserTable;