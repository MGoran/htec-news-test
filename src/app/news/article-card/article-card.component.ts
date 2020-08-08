import { Component, OnInit, Input } from '@angular/core';
import { NewsArticle } from '../service/news-api.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  @Input() public article: NewsArticle;

  constructor() { }

  public ngOnInit (): void {
  }
}
