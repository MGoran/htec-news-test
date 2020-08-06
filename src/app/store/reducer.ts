import { createReducer, on, Action } from '@ngrx/store';
import { changeCountry } from './actions';

export type Countries = 'gb' | 'us';
export interface IRootState {
  main: IState;
}
export interface IState {
  country: Countries;
}

export const initialState = {
  country: 'gb',
};

const _reducer = createReducer(
  initialState,
  on(changeCountry, (state, { country }) => ({ ...state, country }))
);

export function reducer(state: IState, action: Action) {
  return _reducer(state, action);
}
