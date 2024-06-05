import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

axios.defaults.baseURL =
  'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(
        '/users/signup',
        credentials
      );

      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      Notify.success('Register successful!', {
        position: 'left-top',
      });
      return res.data;
    } catch (err) {
      Notify.failure('Please enter all details!', {
        position: 'left-top',
      });
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(
        '/users/login',
        credentials
      );
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      Notify.success('Login successful!', {
        position: 'left-top',
      });

      return res.data;
    } catch (err) {
      Notify.failure(
        'Please enter correct login details!',
        {
          position: 'left-top',
        }
      );
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      // After a successful logout, remove the token from the HTTP header
      clearAuthHeader();
      Notify.success('Logout successful!', {
        position: 'left-top',
      });
    } catch (err) {
      Notify.failure(
        "We've encountered an error, please try again!",
        {
          position: 'left-top',
        }
      );
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue(
        'Unable to fetch user'
      );
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (err) {
      Notify.failure(
        "We've encountered an error, please try again!",
        {
          position: 'left-top',
        }
      );
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);