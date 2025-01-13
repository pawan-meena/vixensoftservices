import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    type: null as string | null,
    direction: "bottom",
  },
  reducers: {
    openModal(
      state,
      action: PayloadAction<{ type: string; direction?: string }>
    ) {
      state.isOpen = true;
      state.type = action.payload.type;
      state.direction = action.payload.direction ?? state.direction;
    },
    closeModal(state) {
      state.isOpen = false;
      state.type = null;
      state.direction = "bottom";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
