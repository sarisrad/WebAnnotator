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
var users_service_1 = require("../../services/users.service");
var User_1 = require("../../models/User");
var RegisterUser = (function () {
    function RegisterUser(usersService) {
        var _this = this;
        this.usersService = usersService;
        this.usersService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
        this.initUser();
    }
    RegisterUser.prototype.initUser = function () {
        this.newUser = new User_1.User;
        this.newUser.role = "none";
        this.passConfirmation = "";
    };
    RegisterUser.prototype.addUser = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.passConfirmation == this.newUser.password) {
            this.usersService.addUser(this.newUser)
                .subscribe(function (user) {
                _this.initUser();
            });
        }
        else {
            alert("Wrong password confirmation");
        }
    };
    return RegisterUser;
}());
RegisterUser = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'register-user',
        templateUrl: '../../../../templates/registerUser.component.html',
        providers: [],
        styleUrls: ['../../../../styles/register_user.css']
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], RegisterUser);
exports.RegisterUser = RegisterUser;
//# sourceMappingURL=registerUser.component.js.map