import { createSlice } from "@reduxjs/toolkit";

interface BooleanState {
  image: any;
}

const initialState: BooleanState = {
  image: "",
};

const imageUploadSlice = createSlice({
  name: "uploadImage",
  initialState,
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { setImage } = imageUploadSlice.actions;

export default imageUploadSlice.reducer;
