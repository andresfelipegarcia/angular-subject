import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {News, NewsComponent} from "./news.component";


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private news: News[];
  public newsSubject = new Subject<News[]>();

  //private newsSubject = new Subject<NewsComponent[]>();

  constructor() {
    this.news = [];
  }

  addNews(news: News){
    this.news.push(news);
    this.newsSubject.next(this.news);
  }

  getNews(): Observable<News[]> {
    console.dir(this.news)
    return this.newsSubject;
  }

  newNews(): News {
    return {
      id: this.news.length,
      description: '',
      date: '',
    };
  }

  getNews1() {
    console.dir(this.news)
    return this.news;
  }


}
