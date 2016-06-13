///<reference path="../../typings/browser.d.ts" />
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
const core_1 = require('@angular/core');
const common_1 = require('@angular/common');
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const http_1 = require('@angular/http');
const router_deprecated_1 = require('@angular/router-deprecated');
const common_2 = require('@angular/common');
require('rxjs/add/operator/map');
const core_2 = require('@angular/core');
core_2.enableProdMode();
const routes_1 = require('./routes');
const dataService_1 = require('./core/services/dataService');
const membershipService_1 = require('./core/services/membershipService');
const utilityService_1 = require('./core/services/utilityService');
let AppRoot = class AppRoot {
    constructor(membershipService, location) {
        this.membershipService = membershipService;
        this.location = location;
        this.routes = routes_1.Routes;
    }
    ngOnInit() {
        this.routes = routes_1.Routes;
        this.location.go('/');
    }
    isUserLoggedIn() {
        return this.membershipService.isUserAuthenticated();
    }
    getUserName() {
        if (this.isUserLoggedIn()) {
            var _user = this.membershipService.getLoggedInUser();
            return _user.Username;
        }
        else
            return 'Account';
    }
    logout() {
        this.membershipService.logout()
            .subscribe(res => {
            localStorage.removeItem('user');
        }, error => console.error('Error: ' + error), () => { });
    }
};
AppRoot = __decorate([
    core_1.Component({
        selector: 'photogallery-app',
        templateUrl: './app/app.html',
        directives: [router_deprecated_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES]
    }),
    router_deprecated_1.RouteConfig(routes_1.APP_ROUTES), 
    __metadata('design:paramtypes', [membershipService_1.MembershipService, common_2.Location])
], AppRoot);
exports.AppRoot = AppRoot;
class AppBaseRequestOptions extends http_1.BaseRequestOptions {
    constructor(...args) {
        super(...args);
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
    }
}
platform_browser_dynamic_1.bootstrap(AppRoot, [http_1.HTTP_PROVIDERS, router_deprecated_1.ROUTER_PROVIDERS,
    core_1.provide(http_1.RequestOptions, { useClass: AppBaseRequestOptions }),
    core_1.provide(common_2.LocationStrategy, { useClass: common_2.HashLocationStrategy }),
    dataService_1.DataService, membershipService_1.MembershipService, utilityService_1.UtilityService])
    .catch(err => console.error(err));
// ROUTER_BINDINGS: DO NOT USE HERE IF YOU WANT TO HAVE HASHLOCATIONSTRATEGY!! 
