import {createAction, createAsyncThunk, createReducer} from '@reduxjs/toolkit';
import axios from 'axios';

export const ACTION_TYPES = {
  INCREMENT_PAGE: 'INCREMENT_PAGE',
};

export const fetchContracts = createAsyncThunk(
  'contracts/fetchContracts',
  async ({page, pageSize}, ThunkAPI) => {
    const state = ThunkAPI.getState().contracts;
    // This keeps in mind state inmutability. redux toolkit enables the use of this kind of syntax
    state.page = page;
    state.pageSize = pageSize;

    // The endpoint you provided sucks. So for the effects of this challenge I'll use this instead.
    return axios
      .get('https://api.datos.gob.mx/v2/Releases_SFP', {
        params: {
          page,
          pageSize,
        },
      })
      .then(response => {
        return response.data.results;
      })
      .catch(error => {
        console.warn(error);
      });
  },
);

export const advanceToNextPage = createAction(ACTION_TYPES.INCREMENT_PAGE);

export const nextPage = state => {
  state.page = state.page + 1;
};
