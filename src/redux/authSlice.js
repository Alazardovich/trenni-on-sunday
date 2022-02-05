import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { email: '', id: '' },
    token: null,
    error: null,
    isLoading: false,
  },
});
export default authSlice.reducer;
