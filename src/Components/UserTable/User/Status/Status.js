import React from 'react';
import StatusList from './StatusList';

function Status({ user }) {
    if (user.status === "Active") {
        return (
            <div className="text-success">
                <small>
                    {user.status}
                </small>
            </div>);
    } else {
        return <StatusList user={user} />
    }
}

export default Status