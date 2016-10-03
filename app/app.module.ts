import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';


// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';


import { AppComponent }         from './app.component';
import {NavBarComponent}        from './navbar.component';
import {QuizListComponent}      from './quiz/quizList.component';
import {QuizCoverComponent}     from './quiz/quizCover.component';
import {SignUpComponent}        from './auth/signup.component';
import { HomeComponent }        from './home.component';

import { routing }              from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    QuizListComponent,
    QuizCoverComponent,
    HomeComponent,
    SignUpComponent
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
