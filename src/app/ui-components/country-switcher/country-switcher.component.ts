import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Countries, IRootState } from '@app/store/reducer';
import { changeCountry } from '@app/store/actions';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-country-switcher',
  templateUrl: './country-switcher.component.html',
  styleUrls: ['./country-switcher.component.scss'],
})
export class CountrySwitcherComponent {
  public selectedCountry$: Observable<Countries>;
  public disabled$: Observable<boolean>;

  constructor(private store: Store<IRootState>, private route: ActivatedRoute) {
    this.selectedCountry$ = this.store.pipe(map((state) => state.main.country));
    this.disabled$ = this.store.pipe(map((state) => state.main.disableCountrySwitcher));
  }

  public changeCountry (country: Countries) {
    this.store.dispatch(changeCountry({ country }));
  }
}
