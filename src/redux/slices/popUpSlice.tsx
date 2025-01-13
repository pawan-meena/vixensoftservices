import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define this in a types file, or at the top of your popUpSlice.js/ts
interface Popup {
  id: string;
  isOpen: boolean;
  direction: "top" | "right" | "left" | null;
}

const popUpSlice = createSlice({
  name: "popUp",
  initialState: [] as Popup[], // Specify the type as Popup[]
  reducers: {
    openPopup: (
      state,
      action: PayloadAction<{ id: string; direction: "top" | "right" | "left" }>
    ) => {
      const { id, direction } = action.payload;
      const existingPopup = state.find((popup) => popup.id === id);

      if (existingPopup) {
        existingPopup.isOpen = true;
        existingPopup.direction = direction;
      } else {
        state.push({ id, isOpen: true, direction });
      }
    },
    closePopup: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const existingPopup = state.find((popup) => popup.id === id);

      if (existingPopup) {
        existingPopup.isOpen = false;
        existingPopup.direction = null;
      }
    },
  },
});

export const { openPopup, closePopup } = popUpSlice.actions;
export default popUpSlice.reducer;
