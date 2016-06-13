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
const router_deprecated_1 = require('@angular/router-deprecated');
let UtilityService = class UtilityService {
    constructor(router) {
        this._router = router;
    }
    convertDateTime(date) {
        var _formattedDate = new Date(date.toString());
        return _formattedDate.toDateString();
    }
    navigate(path) {
        this._router.navigate([path]);
    }
    navigateToSignIn() {
        this.navigate('/Account/Login');
    }
};
UtilityService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [router_deprecated_1.Router])
], UtilityService);
exports.UtilityService = UtilityService;
