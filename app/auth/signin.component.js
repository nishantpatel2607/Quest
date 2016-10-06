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
var auth_service_1 = require('./auth.service');
var forms_1 = require('@angular/forms');
var emailvalidator_1 = require('./emailvalidator');
var SignInComponent = (function () {
    function SignInComponent(_fb, _authService, route, router) {
        this._fb = _fb;
        this._authService = _authService;
        this.route = route;
        this.router = router;
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.signinForm = this._fb.group({
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, emailvalidator_1.EmailValidator.EmailIsValid])],
            'password': ['', forms_1.Validators.required]
        });
    };
    SignInComponent = __decorate([
        core_1.Component({
            selector: 'signIn',
            templateUrl: 'signin.component.html',
            moduleId: module.id,
            providers: [auth_service_1.AuthService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService, router_1.ActivatedRoute, router_1.Router])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=signin.component.js.map