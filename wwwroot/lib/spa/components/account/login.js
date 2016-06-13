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
const router_deprecated_1 = require('@angular/router-deprecated');
const routes_1 = require('./routes');
const user_1 = require('../../core/domain/user');
const operationResult_1 = require('../../core/domain/operationResult');
const membershipService_1 = require('../../core/services/membershipService');
const notificationService_1 = require('../../core/services/notificationService');
let Login = class Login {
    constructor(membershipService, notificationService, router) {
        this.membershipService = membershipService;
        this.notificationService = notificationService;
        this.router = router;
        this.routes = routes_1.Routes;
    }
    ngOnInit() {
        this._user = new user_1.User('', '');
        this.routes = routes_1.Routes;
    }
    login() {
        var _authenticationResult = new operationResult_1.OperationResult(false, '');
        this.membershipService.login(this._user)
            .subscribe(res => {
            _authenticationResult.Succeeded = res.Succeeded;
            _authenticationResult.Message = res.Message;
        }, error => console.error('Error: ' + error), () => {
            if (_authenticationResult.Succeeded) {
                this.notificationService.printSuccessMessage('Welcome back ' + this._user.Username + '!');
                localStorage.setItem('user', JSON.stringify(this._user));
                this.router.navigate([this.routes.home.name]);
            }
            else {
                this.notificationService.printErrorMessage(_authenticationResult.Message);
            }
        });
    }
    ;
};
Login = __decorate([
    core_1.Component({
        selector: 'albums',
        providers: [membershipService_1.MembershipService, notificationService_1.NotificationService],
        templateUrl: './app/components/account/login.html',
        bindings: [membershipService_1.MembershipService, notificationService_1.NotificationService],
        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_deprecated_1.RouterLink]
    }), 
    __metadata('design:paramtypes', [membershipService_1.MembershipService, notificationService_1.NotificationService, router_deprecated_1.Router])
], Login);
exports.Login = Login;
