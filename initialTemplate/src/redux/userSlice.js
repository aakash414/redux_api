import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",

  initialState: {
    name: "john",
    email: "john@gmail.com",
  },
  reducers: {
    update: (state, action) => {
      const { name, email } = action.payload;
      state.name = name;
      state.email = email;
    },
    remove: (state) => (state = {}),
  },
});

export const { update, remove } = userSlice.actions;
export default userSlice.reducer;
