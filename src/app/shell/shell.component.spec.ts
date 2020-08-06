import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '@core';

import { I18nModule } from '@app/i18n';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { CountrySwitcherComponent } from '@app/ui-components/country-switcher/country-switcher.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { initialState } from '@app/store/reducer';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;
  let store: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot(), I18nModule, NgbModule, CoreModule],
      declarations: [HeaderComponent, CountrySwitcherComponent, ShellComponent],
      providers: [
        provideMockStore({ initialState }),
      ],

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
