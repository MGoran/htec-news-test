import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsArticle } from '../service/news-api.service';
import { Store } from '@ngrx/store';
import { IRootState, CategoriesMap } from '@app/store/reducer';
import { Observable, Subscription } from 'rxjs';
import { getItemByCategoryAndIdx } from '@app/store/selectors';
import { take } from 'rxjs/operators';
import { toggleCountrySwitcher } from '@app/store/actions';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {
  public article: NewsArticle;
  public news$: Observable<CategoriesMap>;

  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private store: Store<IRootState>,
    private router: Router,
    private location: Location
  ) {
    this.news$ = this.store.select('main', 'news');
  }

  public ngOnInit (): void {
    this.route.paramMap.subscribe((params) => {
      const articleIndex = params.get('index');
      const category = params.get('category');

      this.subscriptions.push(this.store.select(getItemByCategoryAndIdx(category, articleIndex)).pipe(take(1))
        .subscribe((article) => {
          if (!article) { this.router.navigateByUrl('/'); }
          this.store.dispatch(toggleCountrySwitcher({ disableCountrySwitcher: true }));
          this.article = article;
        }));
    });
  }

  public goBack () {
    this.location.back();
  }

  public ngOnDestroy (): void {
    this.store.dispatch(toggleCountrySwitcher({ disableCountrySwitcher: false }));
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
