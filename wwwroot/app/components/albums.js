"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var paginated_1 = require('../core/common/paginated');
var dataService_1 = require('../core/services/dataService');
var utilityService_1 = require('../core/services/utilityService');
var notificationService_1 = require('../core/services/notificationService');
var routes_1 = require('../routes');
var Albums = (function (_super) {
    __extends(Albums, _super);
    function Albums(albumsService, utilityService, notificationService, router) {
        _super.call(this, 0, 0, 0);
        this.albumsService = albumsService;
        this.utilityService = utilityService;
        this.notificationService = notificationService;
        this.router = router;
        this._albumsAPI = 'api/albums/';
        this.routes = routes_1.Routes;
    }
    Albums.prototype.ngOnInit = function () {
        this.routes = routes_1.Routes;
        this.albumsService.set(this._albumsAPI, 3);
        this.getAlbums();
    };
    Albums.prototype.getAlbums = function () {
        var _this = this;
        this.albumsService.get(this._page)
            .subscribe(function (res) {
            var data = res.json();
            _this._albums = data.Items;
            _this._page = data.Page;
            _this._pagesCount = data.TotalPages;
            _this._totalCount = data.TotalCount;
        }, function (error) {
            if (error.status == 401 || error.status == 404) {
                _this.notificationService.printErrorMessage('Authentication required');
                _this.utilityService.navigateToSignIn();
            }
        });
    };
    Albums.prototype.search = function (i) {
        _super.prototype.search.call(this, i);
        this.getAlbums();
    };
    ;
    Albums.prototype.convertDateTime = function (date) {
        return this.utilityService.convertDateTime(date);
    };
    Albums = __decorate([
        core_1.Component({
            selector: 'albums',
            providers: [notificationService_1.NotificationService],
            templateUrl: './app/components/albums.html',
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_deprecated_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [dataService_1.DataService, utilityService_1.UtilityService, notificationService_1.NotificationService, router_deprecated_1.Router])
    ], Albums);
    return Albums;
}(paginated_1.Paginated));
exports.Albums = Albums;
//# sourceMappingURL=albums.js.map