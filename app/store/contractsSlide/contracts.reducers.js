import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContracts = createAsyncThunk(
  'promotions/fetchPromotions',
  async () => {
    return axios.get('https://api.datos.gob.mx/v2/Records/').then(response => {
      return response.data.results;
    });
  },
);
