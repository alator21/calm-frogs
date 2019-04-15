(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/posts/posts.component */ "./src/app/components/posts/posts.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user-details/user-details.component */ "./src/app/components/user-details/user-details.component.ts");
/* harmony import */ var _components_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/post-details/post-details.component */ "./src/app/components/post-details/post-details.component.ts");









var routes = [{
        'path': '',
        'component': _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"]
    },
    {
        'path': 'posts',
        'component': _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"]
    },
    {
        'path': 'login',
        'component': _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        'path': 'register',
        'component': _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    },
    {
        'path': 'users/discover',
        'component': _components_users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"]
    },
    {
        'path': 'users/user/:username',
        'component': _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_7__["UserDetailsComponent"]
    },
    {
        'path': 'posts/post/:postID',
        'component': _components_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_8__["PostDetailsComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'calm-frogs';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/posts/posts.component */ "./src/app/components/posts/posts.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user-details/user-details.component */ "./src/app/components/user-details/user-details.component.ts");
/* harmony import */ var _components_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/post-details/post-details.component */ "./src/app/components/post-details/post-details.component.ts");
/* harmony import */ var _components_new_post_new_post_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/new-post/new-post.component */ "./src/app/components/new-post/new-post.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_9__["PostsComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_14__["UsersComponent"],
                _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_15__["UserDetailsComponent"],
                _components_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_16__["PostDetailsComponent"],
                _components_new_post_new_post_component__WEBPACK_IMPORTED_MODULE_17__["NewPostComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [_services_post_service__WEBPACK_IMPORTED_MODULE_12__["PostService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\" autocomplete=\"off\">\n  <p>\n    <mat-form-field class=\"example-full-width\">\n      <input type=\"text\" autocomplete=\"off\" matInput placeholder=\"Username\" [(ngModel)]=\"user.username\" name=\"username\">\n    </mat-form-field>\n  </p>\n  <p>\n    <mat-form-field class=\"example-full-width\">\n      <input type=\"password\" autocomplete=\"off\" matInput placeholder=\"Password\" [(ngModel)]=\"user.password\" name=\"password\">\n    </mat-form-field>\n  </p>\n\n  <p>\n    <button type='submit' mat-flat-button color=\"primary\" (click)=\"login(user)\">Login</button>\n  </p>\n\n\n</form>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    };
    LoginComponent.prototype.login = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var correctDetails, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.authService.login(user)];
                    case 1:
                        correctDetails = _a.sent();
                        if (correctDetails) {
                            window.location.href = '/';
                        }
                        else {
                            console.log('Wrong username/password');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log("Something wen't wrong ;(");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n\theight: 100%;\n  }\n  \n  mat-sidenav {\n\twidth: 250px;\n  }\n  \n  a {\n\ttext-decoration: none;\n\tcolor: white;\n  }\n  \n  a:hover,\n  a:active {\n\tcolor: lightgray;\n  }\n  \n  .navigation-items {\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0;\n\tcursor: pointer;\n  }\n  \n  .icon {\n\tdisplay: inline-block;\n\theight: 30px;\n\tmargin: 0 auto;\n\tpadding-right: 5px;\n\ttext-align: center;\n\tvertical-align: middle;\n\twidth: 15%;\n  }\n  \n  .label {\n\tdisplay: inline-block;\n\tline-height: 30px;\n\tmargin: 0;\n\twidth: 85%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0VBQ1g7O0VBRUE7Q0FDRCxZQUFZO0VBQ1g7O0VBRUE7Q0FDRCxxQkFBcUI7Q0FDckIsWUFBWTtFQUNYOztFQUVBOztDQUVELGdCQUFnQjtFQUNmOztFQUVBO0NBQ0QsZ0JBQWdCO0NBQ2hCLFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtFQUNkOztFQUVBO0NBQ0QscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIsVUFBVTtFQUNUOztFQUVBO0NBQ0QscUJBQXFCO0NBQ3JCLGlCQUFpQjtDQUNqQixTQUFTO0NBQ1QsVUFBVTtFQUNUIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250YWluZXIsIG1hdC1zaWRlbmF2LWNvbnRlbnQsIG1hdC1zaWRlbmF2IHtcblx0aGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICBtYXQtc2lkZW5hdiB7XG5cdHdpZHRoOiAyNTBweDtcbiAgfVxuICBcbiAgYSB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Y29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICBhOmhvdmVyLFxuICBhOmFjdGl2ZSB7XG5cdGNvbG9yOiBsaWdodGdyYXk7XG4gIH1cbiAgXG4gIC5uYXZpZ2F0aW9uLWl0ZW1zIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5pY29uIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRoZWlnaHQ6IDMwcHg7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRwYWRkaW5nLXJpZ2h0OiA1cHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0d2lkdGg6IDE1JTtcbiAgfVxuICBcbiAgLmxhYmVsIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRsaW5lLWhlaWdodDogMzBweDtcblx0bWFyZ2luOiAwO1xuXHR3aWR0aDogODUlO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <div>\n        <a routerLink=\"/\">\n          Calm Frogs\n        </a>\n      </div>\n      <div fxFlex fxLayout fxLayoutAlign=\"flex-end\" fxHide.xs>\n        <ul fxLayout fxLayoutGap=\"20px\" class=\"navigation-items\">\n          <li *ngIf=\"!isLoggedIn\">\n            <a>\n              <span class=\"label\"><a routerLink=\"/login\">Login</a></span>\n            </a>\n          </li>\n          <li *ngIf=\"!isLoggedIn\">\n            <a>\n              <span class=\"label\"><a routerLink=\"/register\">Register</a></span>\n            </a>\n          </li>\n          <li *ngIf=\"isLoggedIn\">\n            <a>\n              <span class=\"label\"><a routerLink=\"/users/user/{{user.username}}\">{{user.username | uppercase}}</a></span>\n            </a>\n          </li>\n          <li *ngIf=\"isLoggedIn\">\n            <a>\n              <span class=\"label\"><a routerLink=\"/users/discover\">Discover new users</a> </span>\n            </a>\n          </li>\n          <li *ngIf=\"isLoggedIn\">\n            <a>\n              <span class=\"label\"><a href=\"javascript:void(0)\" (click)=\"logout()\">Logout</a></span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </mat-toolbar>\n    <main>\n    </main>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    NavbarComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateNavbar()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NavbarComponent.prototype.updateNavbar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.isLoggedIn = this.authService.isUserLoggedIn();
                        if (!this.isLoggedIn) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.authService.getTHEUser()];
                    case 1:
                        _a.user = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        window.location.href = '/';
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/new-post/new-post.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/new-post/new-post.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3LXBvc3QvbmV3LXBvc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/new-post/new-post.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/new-post/new-post.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\" autocomplete=\"off\">\n  <p>\n    <mat-form-field class=\"example-full-width\">\n      <input type=\"text\" autocomplete=\"off\" matInput placeholder=\"Content\" [(ngModel)]=\"post.content\" name=\"content\">\n    </mat-form-field>\n  </p>\n\n  <p>\n    <button type='submit' mat-flat-button color=\"primary\" (click)=\"tweet()\">Tweet</button>\n  </p>\n\n\n</form>\n"

/***/ }),

/***/ "./src/app/components/new-post/new-post.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/new-post/new-post.component.ts ***!
  \***********************************************************/
/*! exports provided: NewPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostComponent", function() { return NewPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/post */ "./src/app/models/post.ts");



var NewPostComponent = /** @class */ (function () {
    function NewPostComponent() {
        this.post = new _models_post__WEBPACK_IMPORTED_MODULE_2__["Post"]();
    }
    NewPostComponent.prototype.ngOnInit = function () { };
    NewPostComponent.prototype.tweet = function () {
        window.alert('Successfully posted!');
        this.post.content = '';
    };
    NewPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-post',
            template: __webpack_require__(/*! ./new-post.component.html */ "./src/app/components/new-post/new-post.component.html"),
            styles: [__webpack_require__(/*! ./new-post.component.css */ "./src/app/components/new-post/new-post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewPostComponent);
    return NewPostComponent;
}());



/***/ }),

/***/ "./src/app/components/post-details/post-details.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/post-details/post-details.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC1kZXRhaWxzL3Bvc3QtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/post-details/post-details.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/post-details/post-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\">\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>{{post.content}}</mat-card-title>\n      <mat-card-subtitle>\n        By\n        <a routerLink=\"/users/user/{{post.author.username}}\">\n          {{post.author.username}}\n        </a>\n      </mat-card-subtitle>\n      <mat-card-subtitle>Date: {{post.created_at.toLocaleString()}}</mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/post-details/post-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/post-details/post-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: PostDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailsComponent", function() { return PostDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");




var PostDetailsComponent = /** @class */ (function () {
    function PostDetailsComponent(postService, router, route) {
        this.postService = postService;
        this.router = router;
        this.route = route;
    }
    PostDetailsComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var postID, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        postID = parseInt(this.route.snapshot.params['postID']);
                        _a = this;
                        return [4 /*yield*/, this.postService.getPost(postID)];
                    case 1:
                        _a.post = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-details',
            template: __webpack_require__(/*! ./post-details.component.html */ "./src/app/components/post-details/post-details.component.html"),
            styles: [__webpack_require__(/*! ./post-details.component.css */ "./src/app/components/post-details/post-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PostDetailsComponent);
    return PostDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/posts/posts.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/posts/posts.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-viewport {\n  text-align: center;\n  height: 60vh;\n  border: 1px solid black;\n}\n\n\n.example-item {\n  height: 150px;\n}\n\n\nspan.author {\n  border: 2px solid red;\n}\n\n\na.hashtag {\n  color: blue;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0cy9wb3N0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7OztBQUdBO0VBQ0UsYUFBYTtBQUNmOzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS12aWV3cG9ydCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHZoO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuXG4uZXhhbXBsZS1pdGVtIHtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuc3Bhbi5hdXRob3Ige1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG59XG5cbmEuaGFzaHRhZyB7XG4gIGNvbG9yOiBibHVlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/posts/posts.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/posts/posts.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-new-post></app-new-post>\n<cdk-virtual-scroll-viewport itemSize=\"150\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let post of posts\" class=\"example-item\">\n    <div *ngIf=\"post\">\n      <p>\n        <a  [innerHTML]=\"highlightHashtags(post)\">\n          <!-- {{post.content || 'Loading...'}} -->\n        </a>\n        \n      </p>\n      <p>\n        <span class='created_at'>\n          {{post.created_at}}\n        </span> &nbsp;&nbsp;\n        By\n        <span class='author'>\n          <a routerLink=\"/users/user/{{post.author.username}}\">{{post.author.realName}}</a>\n        </span>\n      </p>\n      <hr>\n    </div>\n  </div>\n</cdk-virtual-scroll-viewport>\n"

/***/ }),

/***/ "./src/app/components/posts/posts.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/posts/posts.component.ts ***!
  \*****************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _dataSources_post_data_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dataSources/post-data-source */ "./src/app/dataSources/post-data-source.ts");





var PostsComponent = /** @class */ (function () {
    function PostsComponent(sanitizer, postService) {
        this.sanitizer = sanitizer;
        this.postService = postService;
    }
    PostsComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var searchString, howManyPosts;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchString = '';
                        return [4 /*yield*/, this.postService.getPostsLength(searchString)];
                    case 1:
                        howManyPosts = _a.sent();
                        this.posts = new _dataSources_post_data_source__WEBPACK_IMPORTED_MODULE_4__["AllPostsDataSource"](this.postService, howManyPosts, searchString);
                        return [2 /*return*/];
                }
            });
        });
    };
    PostsComponent.prototype.highlightHashtags = function (post) {
        var t = post.content;
        for (var _i = 0, _a = post.hashtags; _i < _a.length; _i++) {
            var h = _a[_i];
            var pattern = new RegExp('(#' + h + ')', 'gi');
            t = t.replace(pattern, "<a class='hashtag'>$1</a>");
        }
        var eHTML = this.sanitizer.bypassSecurityTrustHtml(t);
        return eHTML;
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/components/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/components/posts/posts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\" autocomplete=\"off\">\n  <p>\n    <mat-form-field class=\"example-full-width\">\n      <input type=\"text\" autocomplete=\"off\" matInput placeholder=\"Username\" [(ngModel)]=\"user.username\" name=\"username\">\n    </mat-form-field>\n  </p>\n  <p>\n    <mat-form-field class=\"example-full-width\">\n      <input type=\"password\" autocomplete=\"off\" matInput placeholder=\"Password\" [(ngModel)]=\"user.password\"\n        name=\"password\">\n    </mat-form-field>\n  </p>\n  <p>\n    <mat-form-field class=\"example-full-width\">\n      <input type=\"text\" autocomplete=\"off\" matInput placeholder=\"Email\" [(ngModel)]=\"user.email\" name=\"email\">\n    </mat-form-field>\n  </p>\n\n  <p>\n    <button type='submit' mat-flat-button color=\"primary\" (click)=\"register(user)\">Register</button>\n  </p>\n</form>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    };
    RegisterComponent.prototype.register = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.register(user)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.router.navigateByUrl('/');
                            return [2 /*return*/];
                        }
                        console.log('Register error');
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/user-details/user-details.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 400px;\n}\n\n\n.example-viewport {\n  text-align: center;\n  height: 60vh;\n  border: 1px solid black;\n}\n\n\n.example-item {\n  height: 150px;\n}\n\n\nspan.author{\n  border:2px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7OztBQUdBO0VBQ0UsYUFBYTtBQUNmOzs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG5cblxuLmV4YW1wbGUtdmlld3BvcnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNjB2aDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cblxuLmV4YW1wbGUtaXRlbSB7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbnNwYW4uYXV0aG9ye1xuICBib3JkZXI6MnB4IHNvbGlkIHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/user-details/user-details.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>{{user.username}}</mat-card-title>\n      <mat-card-subtitle>{{user.realName}}</mat-card-subtitle>\n      <mat-card-subtitle>{{user.email}}</mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n\n  <div *ngIf=\"!posts || (posts && posts.length ===1)\">\n    \n  </div>\n\n\n  <div *ngIf=\"posts && posts.length>0\">\n    <cdk-virtual-scroll-viewport itemSize=\"150\" class=\"example-viewport\">\n      <div *cdkVirtualFor=\"let post of posts\" class=\"example-item\">\n        <div *ngIf=\"post\">\n          <p>\n            <a routerLink=\"/posts/post/{{post._id}}\">\n              {{post.content || 'Loading...'}}\n            </a>\n          </p>\n          <p>\n            <span class='created_at'>\n              {{post.created_at}}\n            </span> &nbsp;&nbsp;\n          </p>\n          <hr>\n        </div>\n      </div>\n    </cdk-virtual-scroll-viewport>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-details/user-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _dataSources_post_data_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dataSources/post-data-source */ "./src/app/dataSources/post-data-source.ts");






var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(router, route, userService, postService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.postService = postService;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var username, _a, searchString;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        username = this.route.snapshot.params['username'];
                        _a = this;
                        return [4 /*yield*/, this.userService.getUser(username)];
                    case 1:
                        _a.user = _b.sent();
                        searchString = '';
                        this.posts = new _dataSources_post_data_source__WEBPACK_IMPORTED_MODULE_5__["UserPostsDataSource"](this.postService, 1, username, searchString);
                        return [2 /*return*/];
                }
            });
        });
    };
    UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/components/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/components/user-details/user-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/users/users.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-viewport {\n  text-align: center;\n  height: 60vh;\n  border: 1px solid black;\n}\n\n\n.example-item {\n  height: 150px;\n}\n\n\nspan.author {\n  border: 2px solid red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7OztBQUdBO0VBQ0UsYUFBYTtBQUNmOzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXZpZXdwb3J0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDYwdmg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG5cbi5leGFtcGxlLWl0ZW0ge1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG5zcGFuLmF1dGhvciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/users/users.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"user\">\n  <mat-form-field>\n    <input matInput placeholder=\"Search by username\" [(ngModel)]=\"user.username\" (ngModelChange)=\"onChange($event)\"\n      autocomplete=\"off\">\n  </mat-form-field>\n</p>\n\n\n\n<cdk-virtual-scroll-viewport itemSize=\"150\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let user of users\" class=\"example-item\">\n    <div *ngIf=\"user\">\n      <p>\n        <a routerLink=\"/users/user/{{user.username}}\">{{user.username || 'Loading...'}}</a>\n      </p>\n      <hr>\n    </div>\n  </div>\n</cdk-virtual-scroll-viewport>\n"

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _dataSources_user_data_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dataSources/user-data-source */ "./src/app/dataSources/user-data-source.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");





var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService) {
        this.userService = userService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var username, howManyUsers;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        username = '';
                        return [4 /*yield*/, this.userService.getNumberOfUsers(username)];
                    case 1:
                        howManyUsers = _a.sent();
                        this.users = new _dataSources_user_data_source__WEBPACK_IMPORTED_MODULE_3__["AllUsersDataSource"](this.userService, howManyUsers);
                        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersComponent.prototype.onChange = function (username) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.users.search(username)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/components/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/components/users/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/dataSources/post-data-source.ts":
/*!*************************************************!*\
  !*** ./src/app/dataSources/post-data-source.ts ***!
  \*************************************************/
/*! exports provided: AllPostsDataSource, UserPostsDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPostsDataSource", function() { return AllPostsDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPostsDataSource", function() { return UserPostsDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/post */ "./src/app/models/post.ts");




var AllPostsDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AllPostsDataSource, _super);
    function AllPostsDataSource(postService, numberOfPosts, searchString) {
        var _this = _super.call(this) || this;
        _this.postService = postService;
        _this.pageSize = 5;
        _this.fetchedPages = new Set();
        _this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        _this.searchString = searchString;
        _this.length = numberOfPosts;
        _this.cachedData = Array.from({
            length: _this.length
        });
        _this.dataStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_this.cachedData);
        return _this;
    }
    AllPostsDataSource.prototype.connect = function (collectionViewer) {
        var _this = this;
        this.subscription.add(collectionViewer.viewChange.subscribe(function (range) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var startPage, endPage, i;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startPage = this.getPageForIndex(range.start);
                        endPage = this.getPageForIndex(range.end - 1);
                        i = startPage;
                        _a.label = 1;
                    case 1:
                        if (!(i <= endPage)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.fetchPage(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        }); }));
        return this.dataStream;
    };
    AllPostsDataSource.prototype.disconnect = function () {
        this.subscription.unsubscribe();
    };
    AllPostsDataSource.prototype.search = function (searchString) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var numberOfPosts;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.searchString = searchString;
                        return [4 /*yield*/, this.postService.getPostsLength(this.searchString)];
                    case 1:
                        numberOfPosts = _a.sent();
                        this.length = numberOfPosts;
                        this.fetchedPages = new Set();
                        this.cachedData = Array.from({
                            length: this.length
                        });
                        return [4 /*yield*/, this.fetchPage(0)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AllPostsDataSource.prototype.getPageForIndex = function (index) {
        return Math.floor(index / this.pageSize);
    };
    AllPostsDataSource.prototype.fetchPage = function (page) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, d;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.fetchedPages.has(page)) {
                            return [2 /*return*/];
                        }
                        this.fetchedPages.add(page);
                        return [4 /*yield*/, this.postService.getPosts(this.searchString, this.pageSize, page)];
                    case 1:
                        d = _b.sent();
                        (_a = this.cachedData).splice.apply(_a, [page * this.pageSize, this.pageSize].concat(Array.from({
                            length: d.length
                        }).map(function (_, i) {
                            var post = d[i];
                            return new _models_post__WEBPACK_IMPORTED_MODULE_3__["Post"]({
                                'content': post.content,
                                'author': post.author,
                                'created_at': post.created_at,
                                '_id': post._id,
                                'hashtags': post.hashtags,
                                'mentions': post.mentions
                            });
                        })));
                        this.dataStream.next(this.cachedData);
                        return [2 /*return*/];
                }
            });
        });
    };
    return AllPostsDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));

var UserPostsDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserPostsDataSource, _super);
    function UserPostsDataSource(postService, numberOfPosts, username, searchString) {
        var _this = _super.call(this) || this;
        _this.postService = postService;
        _this.pageSize = 5;
        _this.fetchedPages = new Set();
        _this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        _this.searchString = searchString;
        _this.username = username;
        _this.length = numberOfPosts;
        _this.cachedData = Array.from({
            length: _this.length
        });
        _this.dataStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_this.cachedData);
        return _this;
    }
    UserPostsDataSource.prototype.connect = function (collectionViewer) {
        var _this = this;
        this.subscription.add(collectionViewer.viewChange.subscribe(function (range) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var startPage, endPage, i;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startPage = this.getPageForIndex(range.start);
                        endPage = this.getPageForIndex(range.end - 1);
                        i = startPage;
                        _a.label = 1;
                    case 1:
                        if (!(i <= endPage)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.fetchPage(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        }); }));
        return this.dataStream;
    };
    UserPostsDataSource.prototype.disconnect = function () {
        this.subscription.unsubscribe();
    };
    UserPostsDataSource.prototype.search = function (searchString) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var numberOfPosts;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.searchString = searchString;
                        return [4 /*yield*/, this.postService.getPostsOfUserLength(this.searchString, this.username)];
                    case 1:
                        numberOfPosts = _a.sent();
                        this.length = numberOfPosts;
                        this.fetchedPages = new Set();
                        this.cachedData = Array.from({
                            length: this.length
                        });
                        return [4 /*yield*/, this.fetchPage(0)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPostsDataSource.prototype.getPageForIndex = function (index) {
        return Math.floor(index / this.pageSize);
    };
    UserPostsDataSource.prototype.fetchPage = function (page) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, d;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.fetchedPages.has(page)) {
                            return [2 /*return*/];
                        }
                        this.fetchedPages.add(page);
                        return [4 /*yield*/, this.postService.getPostsOfUser(this.searchString, this.username, this.pageSize, page)];
                    case 1:
                        d = _b.sent();
                        (_a = this.cachedData).splice.apply(_a, [page * this.pageSize, this.pageSize].concat(Array.from({
                            length: d.length
                        }).map(function (_, i) {
                            var post = d[i];
                            return new _models_post__WEBPACK_IMPORTED_MODULE_3__["Post"]({
                                'content': post.content,
                                'author': post.author,
                                'created_at': post.created_at,
                                '_id': post._id,
                                'hashtags': post.hashtags,
                                'mentions': post.mentions
                            });
                        })));
                        this.dataStream.next(this.cachedData);
                        return [2 /*return*/];
                }
            });
        });
    };
    return UserPostsDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));



/***/ }),

/***/ "./src/app/dataSources/user-data-source.ts":
/*!*************************************************!*\
  !*** ./src/app/dataSources/user-data-source.ts ***!
  \*************************************************/
/*! exports provided: AllUsersDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllUsersDataSource", function() { return AllUsersDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");




var AllUsersDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AllUsersDataSource, _super);
    function AllUsersDataSource(userService, numberOfUsers) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        _this.pageSize = 5;
        _this.fetchedPages = new Set();
        _this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        _this.length = numberOfUsers;
        _this.cachedData = Array.from({
            length: _this.length
        });
        _this.dataStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_this.cachedData);
        return _this;
    }
    AllUsersDataSource.prototype.connect = function (collectionViewer) {
        var _this = this;
        this.subscription.add(collectionViewer.viewChange.subscribe(function (range) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var startPage, endPage, i;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startPage = this.getPageForIndex(range.start);
                        endPage = this.getPageForIndex(range.end - 1);
                        i = startPage;
                        _a.label = 1;
                    case 1:
                        if (!(i <= endPage)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.fetchPage(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        }); }));
        return this.dataStream;
    };
    AllUsersDataSource.prototype.disconnect = function () {
        this.subscription.unsubscribe();
    };
    AllUsersDataSource.prototype.search = function (username) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var numberOfUsers;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.searchString = username;
                        return [4 /*yield*/, this.userService.getNumberOfUsers(this.searchString)];
                    case 1:
                        numberOfUsers = _a.sent();
                        this.length = numberOfUsers;
                        this.fetchedPages = new Set();
                        this.cachedData = Array.from({
                            length: this.length
                        });
                        return [4 /*yield*/, this.fetchPage(0)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AllUsersDataSource.prototype.getPageForIndex = function (index) {
        return Math.floor(index / this.pageSize);
    };
    AllUsersDataSource.prototype.fetchPage = function (page) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, d;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.fetchedPages.has(page)) {
                            return [2 /*return*/];
                        }
                        this.fetchedPages.add(page);
                        return [4 /*yield*/, this.userService.getUsersWithUsername(this.searchString, this.pageSize, page)];
                    case 1:
                        d = _b.sent();
                        (_a = this.cachedData).splice.apply(_a, [page * this.pageSize, this.pageSize].concat(Array.from({
                            length: d.length
                        }).map(function (_, i) {
                            return new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]({
                                'username': d[i].username,
                                'email': d[i].email,
                                'realName': d[i].realName
                            });
                        })));
                        this.dataStream.next(this.cachedData);
                        return [2 /*return*/];
                }
            });
        });
    };
    return AllUsersDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");







var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollDispatchModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/mock-data.ts":
/*!******************************!*\
  !*** ./src/app/mock-data.ts ***!
  \******************************/
/*! exports provided: USERS, POSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSTS", function() { return POSTS; });
/* harmony import */ var _models_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/post */ "./src/app/models/post.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/user */ "./src/app/models/user.ts");


var USERS = [
    new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]({
        'realName': 'Leonardo Payne',
        'username': 'icefallshampoo',
        'email': 'brainless@att.net',
        'password': '123'
    }),
    new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]({
        'realName': 'Carl Henson',
        'username': 'FluffyPug',
        'email': 'psharpe@msn.com',
        'password': '123'
    }),
    new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]({
        'realName': 'Jensen Combs',
        'username': 'curvymachine',
        'email': 'pappp@optonline.net',
        'password': '123'
    }),
    new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]({
        'realName': 'Aubrey Guzman',
        'username': 'jobless_star',
        'email': 'cgcra@hotmail.com',
        'password': '123'
    }),
    new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]({
        'realName': 'Alissa Heath',
        'username': 'understood-ring',
        'email': 'sartak@yahoo.ca',
        'password': '123'
    }),
    new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]({
        'realName': 'Julius Patton',
        'username': 'fragile_advertisement',
        'email': 'sisyphus@att.net',
        'password': '123'
    }),
    new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]({
        'realName': 'Lara Hinton',
        'username': 'adorable-ticket',
        'email': 'danzigism@att.net',
        'password': '123'
    }),
    new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]({
        'realName': 'Katie Baker',
        'username': 'futuristic_canvas',
        'email': 'lukka@aol.com',
        'password': '123'
    }),
    new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]({
        'realName': 'Bethany Yates',
        'username': 'exotic-cakes',
        'email': 'kmself@verizon.net',
        'password': '123'
    }),
    new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]({
        'realName': 'Damarion Dean',
        'username': 'regular_crime',
        'email': 'dinther@me.com',
        'password': '123'
    })
];
var POSTS = [
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.",
        'author': USERS[0],
        'created_at': getRandomDate(),
        '_id': 1
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.",
        'author': USERS[0],
        'created_at': getRandomDate(),
        '_id': 2
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?",
        'author': USERS[0],
        'created_at': getRandomDate(),
        '_id': 3
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.",
        'author': USERS[0],
        'created_at': getRandomDate(),
        '_id': 4
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
        'author': USERS[1],
        'created_at': getRandomDate(),
        '_id': 4
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.",
        'author': USERS[1],
        'created_at': getRandomDate(),
        '_id': 5
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?",
        'author': USERS[1],
        'created_at': getRandomDate(),
        '_id': 6
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. ",
        'author': USERS[1],
        'created_at': getRandomDate(),
        '_id': 7
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.",
        'author': USERS[2],
        'created_at': getRandomDate(),
        '_id': 8
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.",
        'author': USERS[2],
        'created_at': getRandomDate(),
        '_id': 9
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "Together we can change the world, just one random act of kindness at a time.",
        'author': USERS[2],
        'created_at': getRandomDate(),
        '_id': 10
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.",
        'author': USERS[2],
        'created_at': getRandomDate(),
        '_id': 11
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "We live in an age when unnecessary things are our only necessities.",
        'author': USERS[3],
        'created_at': getRandomDate(),
        '_id': 12
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "If God had wanted us to vote, he would have given us candidates.",
        'author': USERS[3],
        'created_at': getRandomDate(),
        '_id': 13
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "There are worse things than looking stupid. Sleeping through life is one of them.",
        'author': USERS[3],
        'created_at': getRandomDate(),
        '_id': 14
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "This world is given as the prize for the men in earnest; and that which is true of this world, is truer still of the world to come.",
        'author': USERS[3],
        'created_at': getRandomDate(),
        '_id': 15
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "Poor is the man whose pleasures depend on the permission of another.",
        'author': USERS[4],
        'created_at': getRandomDate(),
        '_id': 16
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "Success usually comes to those who are too busy to be looking for it.",
        'author': USERS[4],
        'created_at': getRandomDate(),
        '_id': 17
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "There is no such thing as a moral or an immoral book. Books are well written or badly written.",
        'author': USERS[4],
        'created_at': getRandomDate(),
        '_id': 18
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "No human thing is of serious importance.",
        'author': USERS[4],
        'created_at': getRandomDate(),
        '_id': 19
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "People drain me, even the closest of friends, and I find loneliness to be the best state in the union to live in.",
        'author': USERS[5],
        'created_at': getRandomDate(),
        '_id': 20
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "The coward dies a thousand deaths, the brave man...only five hundred.",
        'author': USERS[5],
        'created_at': getRandomDate(),
        '_id': 21
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "I'm a born-again atheist.",
        'author': USERS[5],
        'created_at': getRandomDate(),
        '_id': 22
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "Parents were invented to make children happy by giving them something to ignore.",
        'author': USERS[5],
        'created_at': getRandomDate(),
        '_id': 23
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "The grass is always greener once you don't have to mow a lawn anymore. #grass",
        'author': USERS[6],
        'created_at': getRandomDate(),
        '_id': 24,
        'hashtags': ['grass']
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "Beauty is in the #eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye.",
        'author': USERS[6],
        'created_at': getRandomDate(),
        '_id': 25,
        'hashtags': ['eye']
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "A lie told often enough becomes the truth.",
        'author': USERS[6],
        'created_at': getRandomDate(),
        '_id': 26
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "A good name, like good will, is got by many actions and lost by one.",
        'author': USERS[6],
        'created_at': getRandomDate(),
        '_id': 27
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "There is some comfort in #dying surrounded by one's children. @understood-ring",
        'author': USERS[6],
        'created_at': getRandomDate(),
        '_id': 28,
        'hashtags': ['dying'],
        'mentions': [new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]({
                'username': 'understood-ring'
            })]
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "All movements go too far. @icefallshampoo right?",
        'author': USERS[6],
        'created_at': getRandomDate(),
        '_id': 29,
        'mentions': [new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]({
                'username': 'icefallshampoo'
            })]
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "Some people like my #advice so much that they frame it upon the #wall instead of using it.",
        'author': USERS[6],
        'created_at': getRandomDate(),
        '_id': 30,
        'hashtags': ['advice', 'wall']
    }),
    new _models_post__WEBPACK_IMPORTED_MODULE_0__["Post"]({
        'content': "A good name, like good will, is got by many actions and lost by #one.",
        'author': USERS[6],
        'created_at': getRandomDate(),
        '_id': 31,
        'hashtags': ['one']
    }),
];
function getRandomDate() {
    return new Date(Math.floor(Math.random() * (1555004739544 - 345004739544 + 1)) + 345004739544);
}


/***/ }),

/***/ "./src/app/models/post.ts":
/*!********************************!*\
  !*** ./src/app/models/post.ts ***!
  \********************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/app/models/user.ts");

var Post = /** @class */ (function () {
    function Post(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.content, content = _c === void 0 ? '' : _c, _d = _b.author, author = _d === void 0 ? new _user__WEBPACK_IMPORTED_MODULE_0__["User"]() : _d, _e = _b.created_at, created_at = _e === void 0 ? new Date() : _e, _f = _b._id, _id = _f === void 0 ? Math.floor(Math.random() * (1000000 - 0 + 1)) + 0 : _f, _g = _b.hashtags, hashtags = _g === void 0 ? [] : _g, _h = _b.mentions, mentions = _h === void 0 ? [] : _h;
        this.content = content;
        this.author = author;
        this.created_at = created_at;
        this._id = _id;
        this.hashtags = hashtags;
        this.mentions = mentions;
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.username, username = _c === void 0 ? '' : _c, _d = _b.password, password = _d === void 0 ? '' : _d, _e = _b.email, email = _e === void 0 ? '' : _e, _f = _b.realName, realName = _f === void 0 ? '' : _f;
        this.username = username;
        this.password = password;
        this.email = email;
        this.realName = realName;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-data */ "./src/app/mock-data.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AuthService = /** @class */ (function () {
    function AuthService() {
        this.users = _mock_data__WEBPACK_IMPORTED_MODULE_2__["USERS"];
    }
    AuthService.prototype.login = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var correctDetails, userIndex, i, u;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                correctDetails = false;
                userIndex = -1;
                for (i = 0; i < this.users.length; i++) {
                    u = this.users[i];
                    if (user.username === u.username && user.password === u.password) {
                        correctDetails = true;
                        userIndex = i;
                        break;
                    }
                }
                if (correctDetails) {
                    localStorage.setItem('isLoggedIn', 'true');
                    this.userIndex = userIndex;
                    localStorage.setItem('userIndex', this.userIndex.toString());
                }
                return [2 /*return*/, correctDetails];
            });
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.setItem('userIndex', '-1');
    };
    AuthService.prototype.isUserLoggedIn = function () {
        return localStorage.getItem('isLoggedIn') === "true";
    };
    AuthService.prototype.getTHEUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var randomUser;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.userIndex = parseInt(localStorage.getItem('userIndex'));
                randomUser = _mock_data__WEBPACK_IMPORTED_MODULE_2__["USERS"][this.userIndex];
                return [2 /*return*/, Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(randomUser).toPromise()];
            });
        });
    };
    AuthService.prototype.register = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var username, password, email, registerResult;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                username = user.username;
                password = user.password;
                email = user.email;
                registerResult = false;
                return [2 /*return*/, Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(registerResult).toPromise()];
            });
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mock-data */ "./src/app/mock-data.ts");




var PostService = /** @class */ (function () {
    function PostService() {
        this.posts = _mock_data__WEBPACK_IMPORTED_MODULE_3__["POSTS"].sort(function (a, b) { return a.created_at.getTime() - b.created_at.getTime(); });
    }
    PostService.prototype.getPosts = function (searchString, limit, page) {
        if (searchString === void 0) { searchString = ''; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var posts$, pattern;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                posts$ = this.posts.slice();
                pattern = new RegExp(".*" + searchString + ".*", 'gi');
                posts$ = posts$.filter(function (e) {
                    return e.content.match(pattern);
                });
                return [2 /*return*/, Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(posts$.slice(limit * page, limit * page + limit)).toPromise()];
            });
        });
    };
    PostService.prototype.getPostsLength = function (searchString) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var posts$, pattern;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                posts$ = this.posts.slice();
                pattern = new RegExp(".*" + searchString + ".*", 'gi');
                posts$ = posts$.filter(function (e) {
                    return e.content.match(pattern);
                });
                return [2 /*return*/, Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(posts$.length).toPromise()];
            });
        });
    };
    PostService.prototype.getPostsOfUser = function (searchString, username, limit, page) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var posts$, pattern;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                posts$ = this.posts.slice();
                pattern = new RegExp(".*" + searchString + ".*", 'gi');
                posts$ = posts$.filter(function (e) {
                    return e.content.match(pattern);
                });
                return [2 /*return*/, Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(posts$.filter(function (e) {
                        return e.author.username === username;
                    }).slice(limit * page, limit * page + limit)).toPromise()];
            });
        });
    };
    PostService.prototype.getPostsOfUserLength = function (searchString, username) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var posts$, pattern;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                posts$ = this.posts.slice();
                pattern = new RegExp(".*" + searchString + ".*", 'gi');
                posts$ = posts$.filter(function (e) {
                    return e.content.match(pattern);
                });
                return [2 /*return*/, Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(posts$.filter(function (e) {
                        return e.author.username === username;
                    }).length).toPromise()];
            });
        });
    };
    PostService.prototype.getPost = function (postID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.posts.filter(function (e) { return e._id === postID; })[0]).toPromise()];
            });
        });
    };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-data */ "./src/app/mock-data.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var UserService = /** @class */ (function () {
    function UserService() {
        this.users = _mock_data__WEBPACK_IMPORTED_MODULE_2__["USERS"];
    }
    UserService.prototype.getUsers = function (limit, page) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.users.slice(limit * page, limit * page + limit)).toPromise()];
            });
        });
    };
    UserService.prototype.getUsersWithUsername = function (username, limit, page) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var users$, pattern;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                users$ = this.users.slice();
                if (!username) {
                    username = '';
                }
                pattern = new RegExp(".*" + username + ".*", 'gi');
                users$ = users$.filter(function (e) {
                    return e.username.match(pattern);
                });
                return [2 /*return*/, Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(users$.slice(limit * page, limit * page + limit)).toPromise()];
            });
        });
    };
    UserService.prototype.getNumberOfUsers = function (username) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var users$, pattern;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                users$ = this.users.slice();
                if (!username) {
                    username = '';
                }
                pattern = new RegExp(".*" + username + ".*", 'gi');
                users$ = users$.filter(function (e) {
                    return e.username.match(pattern);
                });
                return [2 /*return*/, Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(users$.length).toPromise()];
            });
        });
    };
    UserService.prototype.getUser = function (username) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.users.find(function (e) {
                        return e.username === username;
                    })).toPromise()];
            });
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alator/workspace/calm-frogs/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map