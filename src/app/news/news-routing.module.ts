import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { TopNewsComponent } from './top-news/top-news.component';
import { Shell } from '@app/shell/shell.service';
import { ArticleComponent } from './article/article.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/top-news', pathMatch: 'full' },
    { path: 'top-news', component: TopNewsComponent, data: { title: extract('Top News') } },
    { path: 'article/:category/:index', component: ArticleComponent, data: { title: extract('Article') } },
    { path: 'categories', component: TopNewsComponent, data: { title: extract('Categories') } },
    { path: 'search', component: SearchComponent, data: { title: extract('Search') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class NewsRoutingModule { }
