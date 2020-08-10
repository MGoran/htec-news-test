import { Component, OnInit } from '@angular/core';
import { Countries, IRootState } from '@app/store/reducer';
import { Observable } from 'rxjs';
import { NewsArticle, NewsApiService } from '../service/news-api.service';
import { Store } from '@ngrx/store';
import { loadNews } from '@app/store/actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public topNews$: Observable<NewsArticle[]>;
  public selectedCountry$: Observable<Countries>;
  public selectedCountry: Countries;
  public searchTerm = '';

  constructor(private newsApiService: NewsApiService, private store: Store<IRootState>) {
    this.selectedCountry$ = this.store.select('main', 'country');
    this.topNews$ = this.store.select('main', 'news', 'TopNews');
  }

  public ngOnInit () {
    this.store.dispatch(loadNews({ TopNews: [] }));
    this.selectedCountry$.subscribe((country: Countries) => {
      this.selectedCountry = country;
      this.searchNews(this.searchTerm, this.selectedCountry);
    });
  }

  public searchNews (query: string, country: Countries) {
    if (query.length < 3) { return; }
    this.newsApiService
      .getTopNews({ country, query })
      .subscribe((articles: NewsArticle[]) => {
        this.store.dispatch(loadNews({ TopNews: articles }));
      });
  }


  public getCountryLabel (country: Countries) {
    return country === 'gb' ? 'Great Britain' : 'United States';
  }

  public onKeydownEvent (_event: KeyboardEvent): void {
    this.searchNews(this.searchTerm, this.selectedCountry);
  }

}
