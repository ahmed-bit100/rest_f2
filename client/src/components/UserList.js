import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../redux/actions';
import UserCard from './UserCard';
import './list.css';

const UserList = () => {
  const {users, loading} = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    console.log(users);
  }, []);
  console.log(users);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div className="user-list">
          {users.map((el) => (
            <UserCard user={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
