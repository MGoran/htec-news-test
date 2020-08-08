import { createSelector } from '@ngrx/store';
import { IRootState } from './reducer';

export const selectItems = (state: IRootState) => state.main.news;

export const getItemByCategoryAndIdx = (category: string, idx: number) => createSelector(selectItems, (allArticles) => {
    return allArticles && allArticles[category] && allArticles[category][idx];
});