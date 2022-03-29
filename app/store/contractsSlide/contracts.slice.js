import {createReducer, createSlice} from '@reduxjs/toolkit';
import {
  ACTION_TYPES,
  advanceToNextPage,
  fetchContracts,
  nextPage,
} from './contracts.reducers';

const initialState = {
  entities: [],
  page: 1,
  pageSize: 5,
};

export default createSlice({
  name: 'contracts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContracts.fulfilled, (state, action) => {
        // react toolkit makes this immutable so don't worry about it
        state.entities = action.payload;
      })
      .addCase(advanceToNextPage, nextPage);
  },
});
