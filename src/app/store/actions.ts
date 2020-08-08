import { createAction, props } from '@ngrx/store';
import { Countries, Loader } from './reducer';

export const changeCountry = createAction('[Global] Change country', props<{ country: Countries }>());
export const toggleLoader = createAction('[Global] Toggle loader', props<Loader>());
