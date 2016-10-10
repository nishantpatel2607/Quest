"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('./rxjs-extensions');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
var app_component_1 = require('./app.component');
var navbar_component_1 = require('./navbar.component');
var quizList_component_1 = require('./quiz/quizList.component');
var quizCover_component_1 = require('./quiz/quizCover.component');
var quizRun_component_1 = require('./quiz/quizRun.component');
var signup_component_1 = require('./auth/signup.component');
var signin_component_1 = require('./auth/signin.component');
var home_component_1 = require('./home.component');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavBarComponent,
                quizList_component_1.QuizListComponent,
                quizCover_component_1.QuizCoverComponent,
                quizRun_component_1.QuizRunComponent,
                home_component_1.HomeComponent,
                signup_component_1.SignUpComponent,
                signin_component_1.SignInComponent
            ],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map