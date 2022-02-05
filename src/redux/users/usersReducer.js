import { createReducer } from '@reduxjs/toolkit';
import { addUser, deleteUser } from './usersActions';

const usersReducer = createReducer([], {
  [addUser]: (state, { payload }) => [payload, ...state],
  [deleteUser]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export default usersReducer;
