import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { NewsRoutingModule } from './news-routing.module';
import { TopNewsComponent } from './top-news/top-news.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleComponent } from './article/article.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, NewsRoutingModule, FormsModule],
  declarations: [TopNewsComponent, ArticleCardComponent, ArticleComponent, SearchComponent],
})
export class NewsModule { }
