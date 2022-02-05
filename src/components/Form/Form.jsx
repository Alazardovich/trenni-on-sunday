import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { addUser } from '../../redux/users/usersSlice';
// import { addUser } from '../../redux/users/usersActions';
const Form = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState('');

  const handleChange = event => {
    setUser(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addUser({ name: user, id: nanoid() }));
    setUser('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input onChange={handleChange} value={user} type="text" />
      </label>
      <button type="submit">Ok</button>
    </form>
  );
};

export default Form;
