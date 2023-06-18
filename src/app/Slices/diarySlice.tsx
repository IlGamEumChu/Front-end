import {createSlice} from '@reduxjs/toolkit';

interface diarySliceProps {
  diaryItems: {
    id: string;
    title: string;
    content: string;
    createdAt: string;
  }[];
  isSelectInputTypeModalVisible: boolean;
  isCompletedModalVisible: boolean;
}

const initialState: diarySliceProps = {
  diaryItems: [
    {
      id: '',
      title: '',
      content: '',
      createdAt: '',
    },
  ],
  isSelectInputTypeModalVisible: false,
  isCompletedModalVisible: false,
};

const diarySlice = createSlice({
  name: 'diarySlice',
  initialState,
  reducers: {
    setDiaryItems: (state, action) => {
      state.diaryItems = action.payload;
    },
    setIsSelectInputTypeModalVisible: (state, action) => {
      state.isSelectInputTypeModalVisible = action.payload;
    },
    setIsCompletedModalVisible: (state, action) => {
      state.isCompletedModalVisible = action.payload;
    },
    reset: () => initialState,
  },
});

export default diarySlice;
export const {
  setDiaryItems,
  setIsSelectInputTypeModalVisible,
  setIsCompletedModalVisible,
  reset,
} = diarySlice.actions;
