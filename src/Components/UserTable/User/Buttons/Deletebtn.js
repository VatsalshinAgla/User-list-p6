import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../../redux/actions';
const Deletebtn = ({user}) => {
    const dispatch=useDispatch();
  return (
    <DeleteOutlineIcon onClick={() => dispatch(deleteUser(user.id))} />
  )
}

export default Deletebtn