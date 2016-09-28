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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var Observable_1 = require("rxjs/Observable");
var quizCategory_1 = require("./model/quizCategory");
var QuizCategoriesService = (function () {
    function QuizCategoriesService(_http) {
        this._http = _http;
        this.url = "http://localhost:3000/";
    }
    QuizCategoriesService.prototype.getCategories = function () {
        return this._http.get(this.url + "quizcategories")
            .map(function (response) {
            var data = response.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var Category = new quizCategory_1.quizCategory();
                Category.categoryName = data[i].categoryName;
                Category.subCategories = new Array();
                for (var j = 0; j < data[i].subCategories.length; j++) {
                    Category.subCategories.push(data[i].subCategories[j]);
                }
                objs.push(Category);
            }
            return objs;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    QuizCategoriesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], QuizCategoriesService);
    return QuizCategoriesService;
}());
exports.QuizCategoriesService = QuizCategoriesService;
//# sourceMappingURL=quizCategories.service.js.map