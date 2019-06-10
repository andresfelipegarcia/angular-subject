import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {NewsService} from "./news.service";
import { FormsModule } from '@angular/forms';


export interface News {
  id: number,
  description: string;
  date: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News;
  listNews;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.news = this.newsService.newNews();


  }

  newNews(): void {
    this.newsService.addNews(this.news);
    this.news = this.newsService.newNews();
  }

  getNews(): void{
    this.newsService.getNews();
  }

}
