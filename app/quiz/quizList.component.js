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
var QuizListComponent = (function () {
    function QuizListComponent(_quizListService, route, router) {
        this._quizListService = _quizListService;
        this.route = route;
        this.router = router;
    }
    QuizListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.category = params["category"];
            _this.subCategory = params["subcategory"];
            _this.searchTag = params["search"];
            if (_this.searchTag == '') {
                _this._quizListService.getQuizessByCategory(_this.category, _this.subCategory)
                    .subscribe(function (quizess) {
                    _this.quizlist = quizess;
                }, function (error) { return console.error(error); });
            }
            else {
                _this._quizListService.getQuizessBySearchTag(_this.searchTag)
                    .subscribe(function (quizess) {
                    _this.quizlist = quizess;
                }, function (error) { return console.error(error); });
            }
        });
    };
    QuizListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    QuizListComponent = __decorate([
        core_1.Component({
            selector: 'quizList',
            template: "\n     <ul>\n         <li  *ngFor = \"let quiz of quizlist\">\n         {{quiz.quizName}}\n         </li>\n     </ul>\n     {{searchTag}}\n     \n    ",
            providers: [quizList_service_1.QuizListService]
        }), 
        __metadata('design:paramtypes', [quizList_service_1.QuizListService, router_1.ActivatedRoute, router_1.Router])
    ], QuizListComponent);
    return QuizListComponent;
}());
exports.QuizListComponent = QuizListComponent;
//# sourceMappingURL=quizList.component.js.map