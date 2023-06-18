import {configureStore} from '@reduxjs/toolkit';
import myPageSlice from './Slices/myPageSlice';
import diarySlice from './Slices/diarySlice';

const store = configureStore({
  reducer: {
    diaryPage: diarySlice.reducer,
    myPage: myPageSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
