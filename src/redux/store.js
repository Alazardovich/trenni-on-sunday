import { configureStore } from '@reduxjs/toolkit';
// import users from './users/usersReducer';
import users from './users/usersSlice';
import auth from './authSlice';
const store = configureStore({
  reducer: {
    users,
    auth,
  },
});
console.log(store);
export default store;
