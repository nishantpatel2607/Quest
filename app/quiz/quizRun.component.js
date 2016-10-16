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
var router_1 = require('@angular/router');
var quizList_service_1 = require('./quizList.service');
var core_2 = require('@angular/core');
var QuizRunComponent = (function () {
    function QuizRunComponent(_quizListService, route, router) {
        this._quizListService = _quizListService;
        this.route = route;
        this.router = router;
        this.questionNo = 1;
        this.Answers = [];
        this.questions = [
            { "questionText": "Question 1 Text here",
                "questionType": 0,
                "marks": 1,
                "_id": "57fb2fc39891a044b4a692e4",
                "options": [
                    "Option 1",
                    "Option 2",
                    "Option 3",
                    "Option 4",
                    "Option 5"
                ] },
            {
                "questionText": "Question 2 Text here",
                "questionType": 0,
                "marks": 2,
                "_id": "57fb2fcf9891a044b4a692e5",
                "options": [
                    "Option 1",
                    "Option 2",
                    "Option 3",
                    "Option 4"
                ] },
            {
                "questionText": "Question 3 Text here",
                "questionType": 0,
                "marks": 1,
                "_id": "57fb2fd89891a044b4a692e6",
                "options": [
                    "Option 1",
                    "Option 2",
                    "Option 3",
                    "Option 4"
                ] },
            {
                "questionText": "Question 4 Text here",
                "questionType": 0,
                "marks": 1,
                "_id": "57fb2fdd9891a044b4a692e7",
                "options": [
                    "Option 1",
                    "Option 2",
                    "Option 3",
                    "Option 4"
                ] }
        ];
    }
    QuizRunComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.quizId = params["quizId"];
        });
        this.currentQuestion = this.questions[this.questionNo - 1];
        this.totalQuestions = this.questions.length;
        for (var i = 0; i < this.totalQuestions; i++) {
            this.Answers.push(-1);
        }
    };
    QuizRunComponent.prototype.previous = function () {
        --this.questionNo;
        if (this.questionNo <= 0)
            this.questionNo = 1;
        this.currentQuestion = this.questions[this.questionNo - 1];
        this.currentAnswer = this.Answers[this.questionNo - 1];
        console.log('Current:' + this.currentAnswer);
    };
    QuizRunComponent.prototype.next = function () {
        ++this.questionNo;
        if (this.questionNo > this.questions.length)
            this.questionNo = this.questions.length;
        this.currentAnswer = this.Answers[this.questionNo - 1];
        this.currentQuestion = this.questions[this.questionNo - 1];
        console.log('Current:' + this.currentAnswer);
    };
    QuizRunComponent.prototype.saveValue = function (option) {
        //this.selectedOption = this.options.filter((item)=> item.id == optionid)[0];
        console.log("Option:" + option);
        this.Answers[this.questionNo - 1] = parseInt(option, 10);
        console.log(this.Answers);
    };
    __decorate([
        core_2.ViewChild('lstOptions'), 
        __metadata('design:type', core_2.ElementRef)
    ], QuizRunComponent.prototype, "el", void 0);
    QuizRunComponent = __decorate([
        core_1.Component({
            selector: 'quizRun',
            templateUrl: "quizRun.component.html",
            moduleId: module.id,
            providers: [quizList_service_1.QuizListService],
        }), 
        __metadata('design:paramtypes', [quizList_service_1.QuizListService, router_1.ActivatedRoute, router_1.Router])
    ], QuizRunComponent);
    return QuizRunComponent;
}());
exports.QuizRunComponent = QuizRunComponent;
//# sourceMappingURL=quizRun.component.js.map