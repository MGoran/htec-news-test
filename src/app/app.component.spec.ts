import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@core';
import { AppComponent } from './app.component';
import { LoaderComponent } from './@shared';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from './store/reducer';

describe('AppComponent', () => {
  let store: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot(), CoreModule],
      declarations: [AppComponent, LoaderComponent],
      providers: [provideMockStore({ initialState: { main: initialState } })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }), 30000);
});
