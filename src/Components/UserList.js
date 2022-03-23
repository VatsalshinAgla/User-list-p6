
import React from 'react';
import CardHover from './CardHover/CardHover';
import UserTable from './UserTable/UserTable';
function UserList() {
    return (
        <>
            <div className="row m-0">
                <div className="col-8">
                    <UserTable />
                </div>
                <div className="col">
                    <CardHover />                    
                </div>
            </div>
               
        </>
    )
}

export default UserList