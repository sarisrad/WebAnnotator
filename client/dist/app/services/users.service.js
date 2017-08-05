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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
    }
    UsersService.prototype.getUsers = function () {
        return this.http.get('/api/users')
            .map(function (res) {
            if (res.status < 200 || res.status >= 300)
                throw new Error();
            else
                return res.json();
        });
    };
    UsersService.prototype.addUser = function (newUser) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/users', JSON.stringify(newUser), { headers: headers })
            .map(function (res) {
            if (res.status < 200 || res.status >= 300)
                throw new Error();
            else
                return res.json();
        });
    };
    UsersService.prototype.deleteUser = function (id) {
        return this.http.delete('/api/users/' + id)
            .map(function (res) {
            if (res.status < 200 || res.status >= 300)
                throw new Error();
            else
                return res.json();
        });
    };
    UsersService.prototype.loginUser = function (userDetails) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/login', JSON.stringify(userDetails), { headers: headers })
            .map(function (res) {
            if (res.status < 200 || res.status >= 300)
                throw new Error();
            else
                return res.json();
        });
    };
    UsersService.prototype.getLoggedUser = function () {
        return this.http.get('/api/login')
            .map(function (res) {
            if (res.status < 200 || res.status >= 300)
                throw new Error();
            else
                return res.json();
        });
    };
    UsersService.prototype.logOutUser = function () {
        return this.http.delete('/api/login')
            .map(function (res) {
            if (res.status < 200 || res.status >= 300)
                throw new Error();
            else
                return res.json();
        });
    };
    return UsersService;
}());
UsersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map