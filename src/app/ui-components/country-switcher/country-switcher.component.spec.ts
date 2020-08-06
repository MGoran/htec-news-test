import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CountrySwitcherComponent } from './country-switcher.component';
import { initialState } from '@app/store/reducer';
import { take } from 'rxjs/operators';

describe('CountrySwitcherComponent', () => {
  let component: CountrySwitcherComponent;
  let fixture: ComponentFixture<CountrySwitcherComponent>;
  let store: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountrySwitcherComponent],
      providers: [
        provideMockStore({ initialState: { main: initialState } }),
      ],

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrySwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('changeCountry', () => {
    it('should have default country set to GB', async () => {
      component.selectedLanguage$.pipe(
        take(1),
      ).subscribe(result => expect(result).toBe('gb'));
    });

    it('should set country to US', async () => {
      const newCountry = 'us';
      component.changeCountry(newCountry);

      component.selectedLanguage$.pipe(
        take(1),
      ).subscribe(result => expect(result).toBe(newCountry));
    });
  });
});
