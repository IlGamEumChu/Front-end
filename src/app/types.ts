import {
  ThunkAction as BaseThunkAction,
  ThunkDispatch as BaseThunkDispatch,
} from 'redux-thunk';
import {RootState} from './store';
import {AnyAction} from '@reduxjs/toolkit';

export type ThunkAction<R = void> = BaseThunkAction<
  R,
  RootState,
  unknown,
  AnyAction
>;
export type ThunkDispatch = BaseThunkDispatch<RootState, unknown, AnyAction>;
