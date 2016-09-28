import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';


import { AppComponent }         from './app.component';
import {NavBarComponent} from './navbar.component';


//import { routing }              from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    
    //routing
  ],
  declarations: [
    AppComponent,
   NavBarComponent
  ],
  
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
