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
var quiz_1 = require("../model/quiz");
var QuizListService = (function () {
    function QuizListService(_http) {
        this._http = _http;
        this.url = "http://localhost:3000/";
    }
    QuizListService.prototype.getQuizessByCategory = function (category, subcategory) {
        var _url = this.url;
        _url += "quiz?category=" + category;
        if (!subcategory || subcategory == '')
            _url += "&&subcategory=";
        else
            _url += "&&subcategory=" + subcategory;
        return this._http.get(_url)
            .map(function (response) {
            var data = response.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var _quiz = new quiz_1.quiz();
                _quiz.Id = data[i]._id;
                _quiz.quizName = data[i].quizName;
                _quiz.categoryName = data[i].categoryName;
                _quiz.subCategoryName = data[i].subCategoryName;
                _quiz.introductionText = data[i].introductionText;
                _quiz.passingMarks = data[i].passingMarks;
                _quiz.durationinMins = data[i].durationinMins;
                _quiz.privateQuiz = data[i].privateQuiz;
                for (var j = 0; j < data[i].resultCategories.length; j++) {
                    var resultCatg = new quiz_1.resultCategory();
                    resultCatg.category = data[i].resultCategories[j].category;
                    resultCatg.marks = data[i].resultCategories[j].marks;
                    _quiz.resultCategories.push(resultCatg);
                }
                objs.push(_quiz);
            }
            return objs;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    QuizListService.prototype.getQuizessBySearchTag = function (searchTag) {
        var _url = this.url;
        _url += "quiz?tag=" + searchTag;
        return this._http.get(_url)
            .map(function (response) {
            var data = response.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var _quiz = new quiz_1.quiz();
                _quiz.Id = data[i]._id;
                _quiz.quizName = data[i].quizName;
                _quiz.categoryName = data[i].categoryName;
                _quiz.subCategoryName = data[i].subCategoryName;
                _quiz.introductionText = data[i].introductionText;
                _quiz.passingMarks = data[i].passingMarks;
                _quiz.durationinMins = data[i].durationinMins;
                _quiz.privateQuiz = data[i].privateQuiz;
                for (var j = 0; j < data[i].resultCategories.length; j++) {
                    var resultCatg = new quiz_1.resultCategory();
                    resultCatg.category = data[i].resultCategories[j].category;
                    resultCatg.marks = data[i].resultCategories[j].marks;
                    _quiz.resultCategories.push(resultCatg);
                }
                objs.push(_quiz);
            }
            return objs;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    QuizListService.prototype.getQuizById = function (quizId) {
        var _url = this.url;
        _url += "quiz/" + quizId;
        return this._http.get(_url)
            .map(function (response) {
            var data = response.json().obj;
            var _quiz = new quiz_1.quiz();
            _quiz.Id = data._id;
            _quiz.quizName = data.quizName;
            _quiz.categoryName = data.categoryName;
            _quiz.subCategoryName = data.subCategoryName;
            _quiz.introductionText = data.introductionText;
            _quiz.passingMarks = data.passingMarks;
            _quiz.durationinMins = data.durationinMins;
            _quiz.privateQuiz = data.privateQuiz;
            for (var j = 0; j < data.resultCategories.length; j++) {
                var resultCatg = new quiz_1.resultCategory();
                resultCatg.category = data.resultCategories[j].category;
                resultCatg.marks = data.resultCategories[j].marks;
                _quiz.resultCategories.push(resultCatg);
            }
            return _quiz;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    QuizListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], QuizListService);
    return QuizListService;
}());
exports.QuizListService = QuizListService;
//# sourceMappingURL=quizList.service.js.map