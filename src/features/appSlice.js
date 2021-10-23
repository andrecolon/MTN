import { createSlice } from "@reduxjs/toolkit";
// https://youtu.be/zc1loX80TX8?t=6669 < -- About the Data layer/REDUX for the channels

export const appSlice = createSlice({
  name: "app",
  initialState: {
    channelId: null,
    channelName: null,
  },
  reducers: {
    setChannelInfo: (state, action) => {
      // state.user = action.payload;
      // state.value = 1;
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

export const { setChannelInfo } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;
