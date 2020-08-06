import { Component, OnInit } from '@angular/core';
import { finalize, map } from 'rxjs/operators';

import { NewsApiService, NewsArticle } from './news-api.service';
import { Countries, IRootState } from '@app/store/reducer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public selectedCountry$: Observable<Countries>;
  public articles: NewsArticle[];
  public isLoading = false;

  constructor(private newsApiService: NewsApiService, private store: Store<IRootState>) {
    this.selectedCountry$ = this.store.pipe(map((state) => state.main.country));
  }

  public ngOnInit () {
    this.selectedCountry$.subscribe((country: Countries) => {
      this.getTopNews(country);
    });
  }

  public getTopNews (country: Countries) {
    this.isLoading = true;
    this.newsApiService
      .getTopNews({ country })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      ).subscribe((articles: NewsArticle[]) => {
        this.articles = articles;
      });
  }
}
