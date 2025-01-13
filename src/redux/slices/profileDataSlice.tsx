import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileData {
  id: number;
  name: string;
  email: string;
}

interface ProfileDataState {
  profileData: ProfileData | null;
}

const initialState: ProfileDataState = {
  profileData: null,
};

const profileDataUploadSlice = createSlice({
  name: "profileData",
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<ProfileData>) => {
      state.profileData = action.payload;
    },
  },
});

export const { setProfileData } = profileDataUploadSlice.actions;

export default profileDataUploadSlice.reducer;
