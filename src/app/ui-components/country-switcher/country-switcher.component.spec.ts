import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CountrySwitcherComponent } from './country-switcher.component';
import { initialState } from '@app/store/reducer';

describe('CountrySwitcherComponent', () => {
  let component: CountrySwitcherComponent;
  let fixture: ComponentFixture<CountrySwitcherComponent>;
  let store: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountrySwitcherComponent],
      providers: [
        provideMockStore({ initialState }),
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
});
