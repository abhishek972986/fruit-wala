import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Use an object with an `items` array
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.items.push(action.payload);
    },
    removeUser: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload); // Removes item by ID
    },
  },
});

export default UserSlice.reducer;
export const { addUser, removeUser } = UserSlice.actions;
