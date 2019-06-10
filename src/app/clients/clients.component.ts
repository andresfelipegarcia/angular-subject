import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {News, NewsComponent} from "../news/news.component";
import {NewsService} from "../news/news.service";

export interface IUser {
  name: string;
  email: string;
  isPremium?: boolean;
}

export const clients = [
  {
    name: 'Andres',
    email: 'pipe@jaya.com',
  },
  {
    name: 'Camilo',
    email: 'milo@jaya.com',
  },
  {
    name: 'Sebastian',
    email: 'sebas@jaya.com',
  }
];


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {

  news: Observable<News[]>;
  listNews: News[] = [];

  constructor(private newsService: NewsService, newsComponent: NewsComponent){}

  ngOnInit() {
    this.news = this.newsService.getNews();
    this.news.subscribe(data => {
      this.listNews = data;
      console.dir(this.listNews);
    });
  }


  private users: IUser[];

  loadData() {
    this.users = clients;
    console.dir(this.users);
  }






}
