import {configureStore} from '@reduxjs/toolkit';
import contractsSlice from './contractsSlide/contracts.slice';

export default configureStore({
  reducer: {
    contracts: contractsSlice.reducer,
  },
});
