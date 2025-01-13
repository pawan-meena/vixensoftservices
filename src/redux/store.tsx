import { configureStore, combineReducers } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import authBooleanSlice from "./slices/authBooleanSlice";
import imageUploadSlice from "./slices/imageUploadSlice";
import setProfileData from "@/redux/slices/profileDataSlice";
import popUpReducer from "@/redux/slices/popUpSlice";
import walletReducer from "./slices/walletSlice";

const rootReducer = combineReducers({
  modal: modalReducer,
  popUp: popUpReducer,
  authBoolean: authBooleanSlice,
  uploadImage: imageUploadSlice,
  setProfileData: setProfileData,
  wallet: walletReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
