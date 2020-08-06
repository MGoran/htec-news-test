import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { NewsRoutingModule } from './news-routing.module';
import { TopNewsComponent } from './top-news/top-news.component';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, NewsRoutingModule],
  declarations: [TopNewsComponent],
})
export class NewsModule { }
