import { createSlice } from "@reduxjs/toolkit";

interface BooleanState {
  value: boolean;
}

const initialState: BooleanState = {
  value: true,
};

const authBooleanSlice = createSlice({
  name: "boolean",
  initialState,
  reducers: {
    setTrue: (state) => {
      state.value = true;
    },
    setFalse: (state) => {
      state.value = false;
    },
  },
});

export const { setTrue, setFalse } = authBooleanSlice.actions;

export default authBooleanSlice.reducer;
