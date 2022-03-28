import {createSlice} from '@reduxjs/toolkit';
import {fetchContracts} from './contracts.reducers';

export default createSlice({
  name: 'contracts',
  initialState: {
    entities: [],
    page: 1,
    pageSize: 5,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchContracts.fulfilled, (state, action) => {
      // react toolkit makes this immutable so don't worry about it
      state.entities = action.payload;
    });
  },
});
