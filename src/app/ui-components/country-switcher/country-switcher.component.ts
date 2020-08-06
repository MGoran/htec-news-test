import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Countries, IRootState } from '@app/store/reducer';
import { changeCountry } from '@app/store/actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-country-switcher',
  templateUrl: './country-switcher.component.html',
  styleUrls: ['./country-switcher.component.scss'],
})
export class CountrySwitcherComponent implements OnInit {
  public selectedLanguage$: Observable<Countries>;

  constructor(private store: Store<IRootState>) {
    this.selectedLanguage$ = this.store.pipe(map((state) => state.main.country));
  }

  public ngOnInit(): void {}

  public changeCountry(country: Countries) {
    this.store.dispatch(changeCountry({ country }));
  }
}
