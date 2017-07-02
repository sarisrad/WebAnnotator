"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var registerUser_component_1 = require("./components/users/registerUser.component");
var loginUser_component_1 = require("./components/users/loginUser.component");
var homePage_component_1 = require("./components/pages/homePage.component");
var aboutPage_component_1 = require("./components/pages/aboutPage.component");
var workspacePage_component_1 = require("./components/pages/workspacePage.component");
var manageCollectionsPage_component_1 = require("./components/pages/manageCollectionsPage.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            registerUser_component_1.RegisterUserComponent,
            loginUser_component_1.LoginUserComponent,
            homePage_component_1.HomePageComponent,
            aboutPage_component_1.AboutPageComponent,
            workspacePage_component_1.WorkspacePageComponent,
            manageCollectionsPage_component_1.ManageCollectionsPageComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map