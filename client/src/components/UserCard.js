import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteUser, getUser} from '../redux/actions';
import './card.css';
import EditUser from './EditUser';

const UserCard = ({user}) => {
  const dispatch = useDispatch();

  // delete users
  const handleDelete = () => {
    dispatch(deleteUser(user._id));
    dispatch(getUser());
  };

  return (
    <div className="userCard">
      <h3> {user.name} </h3>
      <h3> {user.email} </h3>
      <h3> {user.phone} </h3>
      <div className="btns">
        <button onClick={handleDelete}>Delete</button>
        <EditUser users={user} />
      </div>
    </div>
  );
};

export default UserCard;
