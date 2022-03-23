
import React from 'react';
import { useDispatch } from 'react-redux';
import { addSelectedUser } from '../../../redux/actions';
import Avatar from '../../Avtar/Avtar'
import Email from '../../Email/Email'
import Name from '../../Name/Name'
import Deletebtn from './Buttons/Deletebtn';
import Lockbtn from './Buttons/Lockbtn';
import Role from './Role/Role'
import Status from './Status/Status'

function User(props) {
    const dispatch = useDispatch();
    return (
        <tr>
            <td>
                <div className="row" onMouseEnter={() => dispatch(addSelectedUser(props.user))}>
                    <div className="col-2">
                        <Avatar avatar={props.user.avatar} size="img-small" />
                    </div>
                    <div className="col m-auto">
                        <Name first_name={props.user.first_name} last_name={props.user.last_name} />
                        <Email email={props.user.email} />
                    </div>
                </div>
            </td>
            <td>
                <Status user={props.user} />
            </td>
            <td>
                <div className="row">
                    <div className="col">
                        <Role user={props.user} />
                    </div>
                    <div className="col text-muted">
                    {props.user.role === 'Owner' ? <Lockbtn /> : <Deletebtn user={props.user} />}
                    </div>

                </div>
            </td>
        </tr>
    )
}

export default User