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
var common_1 = require('@angular/common');
var router_deprecated_1 = require('@angular/router-deprecated');
var routes_1 = require('./routes');
var registration_1 = require('../../core/domain/registration');
var operationResult_1 = require('../../core/domain/operationResult');
var membershipService_1 = require('../../core/services/membershipService');
var notificationService_1 = require('../../core/services/notificationService');
var Register = (function () {
    function Register(membershipService, notificationService, router) {
        this.membershipService = membershipService;
        this.notificationService = notificationService;
        this.router = router;
        this.routes = routes_1.Routes;
    }
    Register.prototype.ngOnInit = function () {
        this._newUser = new registration_1.Registration('', '', '');
        this.routes = routes_1.Routes;
    };
    Register.prototype.register = function () {
        var _this = this;
        var _registrationResult = new operationResult_1.OperationResult(false, '');
        this.membershipService.register(this._newUser)
            .subscribe(function (res) {
            _registrationResult.Succeeded = res.Succeeded;
            _registrationResult.Message = res.Message;
        }, function (error) { return console.error('Error: ' + error); }, function () {
            if (_registrationResult.Succeeded) {
                _this.notificationService.printSuccessMessage('Dear ' + _this._newUser.Username + ', please login with your credentials');
                _this.router.navigate([_this.routes.login.name]);
            }
            else {
                _this.notificationService.printErrorMessage(_registrationResult.Message);
            }
        });
    };
    ;
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
    return Register;
}());
exports.Register = Register;
