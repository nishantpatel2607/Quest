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
var user_1 = require("../model/user");
var auth_service_1 = require('./auth.service');
var forms_1 = require('@angular/forms');
var emailvalidator_1 = require('./emailvalidator');
var matchpasswordvalidator_1 = require('./matchpasswordvalidator');
var SignUpComponent = (function () {
    function SignUpComponent(_fb, _authService, route, router) {
        this._fb = _fb;
        this._authService = _authService;
        this.route = route;
        this.router = router;
        this.user = new user_1.signUpuser();
        this.signupForm = _fb.group({
            'fullName': [null, forms_1.Validators.required],
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, emailvalidator_1.EmailValidator.EmailIsValid])],
            'password': [null, forms_1.Validators.required],
            'confirmPassword': [null, forms_1.Validators.required]
        }, { validator: matchpasswordvalidator_1.matchingPasswords('password', 'confirmPassword') });
    }
    SignUpComponent.prototype.ngOnInit = function () {
        //this.signupForm.controls["email"].setAsyncValidators(this.isEmailExist);
    };
    SignUpComponent.prototype.signUp = function (value) {
        /*this.user = new user();
        this.user.fullName = value.fullName;
        this.user.email = value.email;
        this.user.password = value.password;*/
        this._authService.createUser(this.user).subscribe(function (res) { console.log(res); });
    };
    SignUpComponent = __decorate([
        core_1.Component({
            selector: 'signUp',
            templateUrl: 'signup.component.html',
            moduleId: module.id,
            providers: [auth_service_1.AuthService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService, router_1.ActivatedRoute, router_1.Router])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=signup.component.js.map