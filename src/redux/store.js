import { configureStore, createSlice } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
