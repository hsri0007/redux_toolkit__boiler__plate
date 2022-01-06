import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    name: "hari"
  }
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers(state, action) {
      state.data = action.payload;
    }
  }
});

export default slice.reducer;

export function getUser() {
  return async (dispatch) => {
    try {
      const users = { name: "harry" };
      dispatch(slice.actions.getUsers(users));
    } catch (error) {}
  };
}
