import { createReducer, on, Action } from '@ngrx/store';
import { changeCountry, toggleLoader } from './actions';

export type Countries = 'gb' | 'us';
export interface IRootState {
  main: IState;
}
export interface Loader {
  isLoading?: boolean;
  message?: string;
}
export interface IState {
  country: Countries;
  loaderSettings?: Loader;
}

export const initialState = {
  country: 'gb',
};

const _reducer = createReducer(
  initialState,
  on(changeCountry, (state, { country }) => ({ ...state, country })),
  on(toggleLoader, (state, loaderSettings) => ({ ...state, loaderSettings }))
);

export function reducer (state: IState, action: Action) {
  return _reducer(state, action);
}
