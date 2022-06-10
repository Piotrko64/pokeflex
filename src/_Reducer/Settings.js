import { createSlice } from "@reduxjs/toolkit";
const Settings = { volume: localStorage.getItem("volume") || 0.75 };
const SliceSettings = createSlice({
    name: "Settings",
    initialState: Settings,
    reducers: {
        changeVolume: (state, action) => {
            localStorage.setItem("volume", action.payload);
            return { ...state, volume: action.payload };
        },
    },
});
const SettingsReducer = SliceSettings.reducer;
export const { changeVolume } = SliceSettings.actions;
export default SettingsReducer;
