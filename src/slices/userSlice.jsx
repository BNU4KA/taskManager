import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { noop } from 'lodash';
import { ROOT_API_URL } from '../constants';

const initialState = {
  user: {},
  isUserLoaded: false,
};

export const loginUser = createAsyncThunk('login/User', async (payload, { getState }) => {
  try {
    const { login, password, onSuccess } = payload;
    console.log({ login, password });
    const response = await fetch(`${ROOT_API_URL}/User/login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ login, password }) });
    const responseData = await response.json();
    console.log(responseData);
    document.cookie = `userId=${responseData.id}`
    onSuccess();
    return responseData;
  } catch (err) {
    console.log('login user error', err);
    return {};
  }
});

export const registerUser = createAsyncThunk('reg/User', async (payload, { getState }) => {
  try {
    const { login, password, email, number, onSuccess } = payload;
    // malashevich
    // qwe123_EWQEQ
    // malashevich2002@gmail.com
    const response = await fetch(`${ROOT_API_URL}/User/register`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ login, password, email, phoneNumber: number }) });
    const responseData = await response.json();
    document.cookie = `userId=${responseData.id}`
    onSuccess();
    console.log(responseData);
    return responseData;
  } catch (err) {
    console.log('reg user error', err);
    return {};
  }
});

export const fetchUser = createAsyncThunk('fetch/User', async (payload, { getState }) => {
  try {
    const { userId } = payload;
    console.log('userId 1', userId);
    const response = await fetch(`${ROOT_API_URL}/User/userbyid?id=${userId}`, { method: "GET", headers: { "Content-Type": "application/json" } });
    const responseData = await response.json();
    console.log({ responseData });
    return responseData;
  } catch (err) {
    console.log('fetch user error', err);
    return {};
  }
});

const userSlice = createSlice({
  name: 'userData',
  initialState,
  extraReducers: (user) => {
    user.addCase(loginUser.fulfilled, (state, { payload }) => {
      return state;
    });
    user.addCase(registerUser.fulfilled, (state, { payload }) => {
      return state;
    });
    user.addCase(fetchUser.fulfilled, (state, { payload }) => {
      return {
        ...state,
        user: payload,
        isUserLoaded: true,
      };
    });
  },
});

export default userSlice;
