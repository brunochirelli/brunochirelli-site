import { createSlice } from "@reduxjs/toolkit";

export type ThemeState = {
  mode: string;
  fontBase: number;
};

const initialState: ThemeState = {
  mode: "light",
  fontBase: 18,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state: ThemeState): any => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    increaseFont: (state: ThemeState): any => {
      state.fontBase =
        state.fontBase >= 18 && state.fontBase <= 26
          ? state.fontBase + 2
          : state.fontBase;
    },
    decreaseFont: (state: ThemeState): any => {
      state.fontBase = state.fontBase > 18 ? state.fontBase - 2 : state.fontBase;
    },
  },
});

export const { toggleTheme, increaseFont, decreaseFont } = themeSlice.actions;

export default themeSlice.reducer;
