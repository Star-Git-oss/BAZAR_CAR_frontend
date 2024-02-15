import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: '',
  email: '',
  password: '',
  walletAmount: '0',
  role: 0
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.role = action.payload.role;
    }
  }
});

export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;