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
const registration_1 = require('../../core/domain/registration');
const operationResult_1 = require('../../core/domain/operationResult');
const membershipService_1 = require('../../core/services/membershipService');
const notificationService_1 = require('../../core/services/notificationService');
let Register = class Register {
    constructor(membershipService, notificationService, router) {
        this.membershipService = membershipService;
        this.notificationService = notificationService;
        this.router = router;
        this.routes = routes_1.Routes;
    }
    ngOnInit() {
        this._newUser = new registration_1.Registration('', '', '');
        this.routes = routes_1.Routes;
    }
    register() {
        var _registrationResult = new operationResult_1.OperationResult(false, '');
        this.membershipService.register(this._newUser)
            .subscribe(res => {
            _registrationResult.Succeeded = res.Succeeded;
            _registrationResult.Message = res.Message;
        }, error => console.error('Error: ' + error), () => {
            if (_registrationResult.Succeeded) {
                this.notificationService.printSuccessMessage('Dear ' + this._newUser.Username + ', please login with your credentials');
                this.router.navigate([this.routes.login.name]);
            }
            else {
                this.notificationService.printErrorMessage(_registrationResult.Message);
            }
        });
    }
    ;
};
Register = __decorate([
    core_1.Component({
        selector: 'register',
        providers: [membershipService_1.MembershipService, notificationService_1.NotificationService],
        templateUrl: './app/components/account/register.html',
        bindings: [membershipService_1.MembershipService, notificationService_1.NotificationService],
        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_deprecated_1.ROUTER_DIRECTIVES]
    }), 
    __metadata('design:paramtypes', [membershipService_1.MembershipService, notificationService_1.NotificationService, router_deprecated_1.Router])
], Register);
exports.Register = Register;
