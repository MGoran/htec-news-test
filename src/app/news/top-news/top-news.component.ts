import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { NewsApiService, NewsArticle } from './../service/news-api.service';
import { Countries, IRootState } from '@app/store/reducer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { toggleLoader, loadNews } from '@app/store/actions';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss'],
})
export class TopNewsComponent implements OnInit {
  public topNews$: Observable<NewsArticle[]>;
  public selectedCountry$: Observable<Countries>;
  public selectedCountry: Countries;

  constructor(private newsApiService: NewsApiService, private store: Store<IRootState>) {
    this.selectedCountry$ = this.store.select('main', 'country');
    this.topNews$ = this.store.select('main', 'news', 'TopNews');
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
        this.store.dispatch(loadNews({ TopNews: articles }));
      });
  }

  public getCountryLabel (country: Countries) {
    return country === 'gb' ? 'Great Britain' : 'United States';
  }
}
