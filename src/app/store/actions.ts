import { createAction, props } from '@ngrx/store';
import { Countries } from './reducer';

export const changeCountry = createAction('[Global] Change country', props<{ country: Countries }>());
