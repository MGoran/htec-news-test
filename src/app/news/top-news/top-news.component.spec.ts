import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { TopNewsComponent } from './top-news.component';
import { NewsApiService } from './../service/news-api.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from '@app/store/reducer';
import { RouterTestingModule } from '@angular/router/testing';
import { ArticleCardComponent } from '../article-card/article-card.component';

describe('HomeComponent', () => {
  let component: TopNewsComponent;
  let fixture: ComponentFixture<TopNewsComponent>;
  let store: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, SharedModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [TopNewsComponent, ArticleCardComponent],
      providers: [NewsApiService, provideMockStore({ initialState: { main: initialState } })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
