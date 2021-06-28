import React, {useState} from 'react';
import Modal from 'react-modal';
import {useDispatch} from 'react-redux';
import {addUser, editUser, getUser} from '../redux/actions';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const EditUser = ({users}) => {
  console.log('edit users', users);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [name, setName] = useState(users.name);
  const [email, setEmail] = useState(users.email);
  const [phone, setPhone] = useState(users.phone);
  const dispatch = useDispatch();
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            type="submit"
            onClick={() => {
              dispatch(editUser(users._id, name, email, phone));
              dispatch(getUser());
              closeModal();
            }}
          >
            Confirm
          </button>
          <button onClick={closeModal}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default EditUser;
