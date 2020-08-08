import { Component, OnInit } from '@angular/core';
import { finalize, map } from 'rxjs/operators';

import { NewsApiService, NewsArticle } from './../service/news-api.service';
import { Countries, IRootState } from '@app/store/reducer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { toggleLoader } from '@app/store/actions';
import { extract } from '@app/i18n';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss'],
})
export class TopNewsComponent implements OnInit {
  public selectedCountry$: Observable<Countries>;
  public selectedCountry: Countries;
  public articles: NewsArticle[];

  constructor(private newsApiService: NewsApiService, private store: Store<IRootState>) {
    this.selectedCountry$ = this.store.select('main', 'country');
  }

  public ngOnInit () {
    this.selectedCountry$.subscribe((country: Countries) => {
      this.selectedCountry = country;
      this.getTopNews(country);
    });
  }

  public getTopNews (country: Countries) {
    this.store.dispatch(toggleLoader({ isLoading: true, message: 'Loading Top News' }));

    this.newsApiService
      .getTopNews({ country })
      .pipe(
        finalize(() => {
          this.store.dispatch(toggleLoader({ isLoading: false }));
        })
      ).subscribe((articles: NewsArticle[]) => {
        this.articles = articles;
        console.log(this.articles);
      });
  }

  public getCountryLabel (country: Countries) {
    return country === 'gb' ? 'Great Britain' : 'United States';
  }
}
