import { Component, OnInit, Input } from '@angular/core';
import { NewsArticle, NewsCategories } from '../service/news-api.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  @Input() public article: NewsArticle;
  @Input() public category: NewsCategories;
  @Input() public index: number;

  constructor() { }

  public ngOnInit (): void {
  }
}
