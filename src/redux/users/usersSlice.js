import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    filter: '',
    items: [],
  },
  reducers: {
    changeFilter: (state, action) => {
      //   state.filter=action.payload
      return {
        ...state,
        filter: action.payload,
      };
    },
    addUser: (state, action) => {
      // return {
      //     ...state, items: [action.payload, ...state.items]
      // }
      state.items.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

export default usersSlice.reducer;
export const { addUser, deleteUser, changeFilter } = usersSlice.actions;
