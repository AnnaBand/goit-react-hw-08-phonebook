import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

axios.defaults.baseURL =
  'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      Notify.success('Fetching contacts success!', {
        position: 'left-top',
      });
      return response.data;
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

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        ...contact,
      });
      Notify.success('New contact created successfully!', {
        position: 'left-top',
      });
      return response.data;
    } catch (err) {
      Notify.failure(
        'New contact failed to add, please try again!',
        {
          position: 'left-top',
        }
      );
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `/contacts/${contactId}`
      );
      Notify.success('Delete success!', {
        position: 'left-top',
      });
      return response.data;
    } catch (err) {
      Notify.failure('Delete error, try again!', {
        position: 'left-top',
      });
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/contacts/${data.id}`,
        {
          name: data.name,
          number: data.number,
        }
      );
      Notify.success('Edit success!', {
        position: 'left-top',
      });
      return response.data;
    } catch (err) {
      Notify.failure('Edit error, try again!', {
        position: 'left-top',
      });
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);