/* eslint-disable no-param-reassign */
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  loggedIn?: boolean;
  me?: {
    name: string;
  };
}

const initialState: InitialState = {
  loggedIn: false,
  me: {
    name: '',
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    authenticate: (state, { payload }: PayloadAction<InitialState>) => {
      state.loggedIn = payload.loggedIn;
    },
    saveMe: (state, { payload }: PayloadAction<InitialState>) => {
      state.me = payload.me;
    },
  },
});

export const { actions } = appSlice;
export const { authenticate, saveMe } = appSlice.actions;

export default appSlice.reducer;
