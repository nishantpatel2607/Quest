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
var quiz_1 = require("../model/quiz");
var quizList_service_1 = require('./quizList.service');
var QuizCoverComponent = (function () {
    function QuizCoverComponent(_quizListService, route, router) {
        this._quizListService = _quizListService;
        this.route = route;
        this.router = router;
        this._quiz = new quiz_1.quiz();
    }
    QuizCoverComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.quizId = params["quizId"];
            _this._quizListService.getQuizById(_this.quizId)
                .subscribe(function (quizFound) {
                _this._quiz = quizFound;
            }, function (error) { return console.error(error); });
        });
    };
    QuizCoverComponent = __decorate([
        core_1.Component({
            selector: 'quizCover',
            templateUrl: 'quizCover.component.html',
            moduleId: module.id,
            providers: [quizList_service_1.QuizListService]
        }), 
        __metadata('design:paramtypes', [quizList_service_1.QuizListService, router_1.ActivatedRoute, router_1.Router])
    ], QuizCoverComponent);
    return QuizCoverComponent;
}());
exports.QuizCoverComponent = QuizCoverComponent;
//# sourceMappingURL=quizCover.component.js.map