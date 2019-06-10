import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { ClientsComponent } from './clients/clients.component';
import {NewsService} from "./news/news.service";
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  { path: 'clients', component: ClientsComponent },
  { path: 'news', component: NewsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ClientsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    NewsService,
    NewsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
