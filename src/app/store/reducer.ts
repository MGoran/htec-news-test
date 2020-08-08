import { createReducer, on, Action } from '@ngrx/store';
import { changeCountry, toggleLoader, loadNews } from './actions';
import { NewsArticle } from '@app/news/service/news-api.service';

export type Countries = 'gb' | 'us';

export interface IRootState {
  main: IState;
}

export interface Loader {
  isLoading?: boolean;
  message?: string;
}

export interface CategoriesMap {
  TopNews?: NewsArticle[];
  General?: NewsArticle[];
  Health?: NewsArticle[];
  Science?: NewsArticle[];
  Sport?: NewsArticle[];
  Technology?: NewsArticle[]
}

export interface IState {
  country: Countries;
  loaderSettings?: Loader;
  news?: CategoriesMap
}

export const initialState = {
  country: 'gb',
};

const _reducer = createReducer(
  initialState,
  on(changeCountry, (state: IState, { country }) => ({ ...state, country })),
  on(toggleLoader, (state: IState, loaderSettings) => ({ ...state, loaderSettings })),
  on(loadNews, (state: IState, payload) => ({ ...state, news: Object.assign({}, state.news, payload) })),
);

export function reducer (state: IState, action: Action) {
  return _reducer(state, action);
}
