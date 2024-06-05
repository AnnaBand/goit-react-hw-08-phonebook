import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilter: (state, action) => {
      const filter = action.payload;
      state.filter = filter;
    },
  },
});

export default filterSlice.reducer;
export const { setFilter } = filterSlice.actions;