import { createAction, props } from '@ngrx/store';
import { Countries, Loader } from './reducer';
import { NewsArticle } from '@app/news/service/news-api.service';

export const changeCountry = createAction('[Global] Change country', props<{ country: Countries }>());
export const toggleLoader = createAction('[Global] Toggle loader', props<Loader>());
export const disableCountrySwitcher = createAction('[Global] Disable/Enable country switcher', props<{ disableCountrySwitcher: boolean }>());
export const loadNews = createAction('[News] Load News', props<{ [key: string]: NewsArticle[] }>());
