import {configureStore} from '@reduxjs/toolkit';
import tendersSlice from './tendersSlide/tenders.slice';

export default configureStore({
  reducer: {
    tenders: tendersSlice.reducer,
  },
});
