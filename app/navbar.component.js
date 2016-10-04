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
var quizCategories_service_1 = require('./quizCategories.service');
//import {ControlGroup} from '@angular/common';
var NavBarComponent = (function () {
    function NavBarComponent(_quizCategoriesService, router) {
        this._quizCategoriesService = _quizCategoriesService;
        this.router = router;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._quizCategoriesService.getCategories()
            .subscribe(function (categories) {
            _this.quizCategories = categories;
        }, function (error) { return console.error(error); });
    };
    NavBarComponent.prototype.onSubmit = function () {
        this.router.navigate(['/quizlist', { search: this.searchText }]);
        console.log(this.searchText);
    };
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'navbar',
            moduleId: module.id,
            templateUrl: 'navbar.component.html',
            providers: [quizCategories_service_1.QuizCategoriesService]
        }), 
        __metadata('design:paramtypes', [quizCategories_service_1.QuizCategoriesService, router_1.Router])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map