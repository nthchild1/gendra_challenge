import {createSlice} from '@reduxjs/toolkit';
import {
  advanceToNextPage,
  fetchTenders,
  goBackToPreviousPage,
  nextPage,
  previousPage,
  setPage,
  setPageTo,
} from './tenders.reducers';

const initialState = {
  entities: [],
  page: 1,
  pageSize: 20,
};

export default createSlice({
  name: 'tenders',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTenders.fulfilled, (state, action) => {
        // react toolkit makes this immutable so don't worry about it
        state.entities = action.payload;
      })
      .addCase(advanceToNextPage, nextPage)
      .addCase(goBackToPreviousPage, previousPage)
      .addCase(setPage, setPageTo);
  },
});
