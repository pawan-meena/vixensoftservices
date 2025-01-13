import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WalletState {
  isConnected: boolean;
  walletType: "ethereum" | "solana" | null;
  address: string | null;
  profileImage: string;
}

const initialState: WalletState = {
  isConnected: false,
  walletType: null,
  address: null,
  profileImage: "/default-avatar.png", // Add a default avatar image
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    connectWallet: (
      state,
      action: PayloadAction<{ type: "ethereum" | "solana"; address: string }>
    ) => {
      state.isConnected = true;
      state.walletType = action.payload.type;
      state.address = action.payload.address;
      localStorage.setItem(
        "walletData",
        JSON.stringify({
          isConnected: true,
          walletType: action.payload.type,
          address: action.payload.address,
        })
      );
    },
    disconnectWallet: (state) => {
      state.isConnected = false;
      state.walletType = null;
      state.address = null;
      localStorage.removeItem("walletData");
    },
    loadWalletFromStorage: (state) => {
      const savedWallet = localStorage.getItem("walletData");
      if (savedWallet) {
        const data = JSON.parse(savedWallet);
        state.isConnected = data.isConnected;
        state.walletType = data.walletType;
        state.address = data.address;
      }
    },
  },
});

export const { connectWallet, disconnectWallet, loadWalletFromStorage } =
  walletSlice.actions;
export default walletSlice.reducer;
