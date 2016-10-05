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
var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
        this.url = "http://localhost:3000/user/";
    }
    AuthService.prototype.createUser = function (_user) {
        var body = JSON.stringify(_user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        //console.log(JSON.stringify(_user));
        return this._http.post(this.url + "signup", body, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    AuthService.prototype.updateUser = function (_user) {
        var body = JSON.stringify(_user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.put(this.url + _user.Id, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    AuthService.prototype.isEmailExists = function (email) {
        var _url = this.url + "user/verifyemail?email=" + email;
        return this._http.get(_url)
            .map(function (response) {
            var data = response.json();
            return data;
        });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map