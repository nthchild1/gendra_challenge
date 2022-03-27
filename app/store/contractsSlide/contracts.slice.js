import {createSlice} from '@reduxjs/toolkit';
import {fetchContracts} from './contracts.reducers';

export default createSlice({
  name: 'contracts',
  initialState: {
    entities: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchContracts.fulfilled, (state, action) => {
      // react toolkit makes this immutable so don't worry
      state.entities = action.payload;
    });
  },
});
