import {createSlice} from '@reduxjs/toolkit';

interface MyPageSliceProps {
  accessToken: string;
  nickname: string;
}

const initialState: MyPageSliceProps = {
  accessToken: 'ㅇㄴㅇ',
  nickname: '닉네임',
};

const myPageSlice = createSlice({
  name: 'myPageSlice',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setNickname: (state, action) => {
      state.nickname = action.payload;
    },
    resetMyPageSlice: () => {
      return initialState;
    },
  },
});

export default myPageSlice;
export const {setAccessToken, setNickname, resetMyPageSlice} =
  myPageSlice.actions;
