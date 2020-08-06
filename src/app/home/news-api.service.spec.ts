import { Type } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CoreModule } from '@core';
import { NewsApiService, NewsApiResponse } from './news-api.service';

describe('NewsApiService', () => {
  let newsApiService: NewsApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, HttpClientTestingModule],
      providers: [NewsApiService],
    });

    newsApiService = TestBed.inject(NewsApiService);
    httpMock = TestBed.inject(HttpTestingController as Type<HttpTestingController>);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getRandomQuote', () => {
    it('should status OK', () => {
      // Arrange
      const mockResponse: NewsApiResponse = {
        status: 'ok',
        totalResults: 1,
        articles: []
      };

      // Act
      const newsApiSubscription = newsApiService.getTopNews({ country: 'gb' });

      // Assert
      newsApiSubscription.subscribe((quote: string) => {
        expect(quote).toEqual(mockResponse.status);
      });
      httpMock.expectOne({}).flush(mockResponse);
    });

    it('should return a string in case of error', () => {
      // Act
      const randomQuoteSubscription = newsApiService.getTopNews({ country: 'gb' });

      // Assert
      randomQuoteSubscription.subscribe((response: string) => {
        expect(typeof response).toEqual('string');
        expect(response).toContain('Error');
      });
      httpMock.expectOne({}).flush(null, {
        status: 500,
        statusText: 'error',
      });
    });
  });
});
