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
var operationResult_1 = require('../core/domain/operationResult');
var AlbumPhotos = (function (_super) {
    __extends(AlbumPhotos, _super);
    function AlbumPhotos(dataService, utilityService, notificationService, routeParam) {
        _super.call(this, 0, 0, 0);
        this.dataService = dataService;
        this.utilityService = utilityService;
        this.notificationService = notificationService;
        this.routeParam = routeParam;
        this._albumsAPI = 'api/albums/';
        this._photosAPI = 'api/photos/';
    }
    AlbumPhotos.prototype.ngOnInit = function () {
        this._albumId = this.routeParam.get('id');
        this._albumsAPI += this._albumId + '/photos/';
        this.dataService.set(this._albumsAPI, 12);
        this.getAlbumPhotos();
    };
    AlbumPhotos.prototype.getAlbumPhotos = function () {
        var _this = this;
        this.dataService.get(this._page)
            .subscribe(function (res) {
            var data = res.json();
            _this._photos = data.Items;
            _this._displayingTotal = _this._photos.length;
            _this._page = data.Page;
            _this._pagesCount = data.TotalPages;
            _this._totalCount = data.TotalCount;
            _this._albumTitle = _this._photos[0].AlbumTitle;
        }, function (error) {
            if (error.status == 401 || error.status == 302) {
                _this.utilityService.navigateToSignIn();
            }
            console.error('Error: ' + error);
        }, function () { return console.log(_this._photos); });
    };
    AlbumPhotos.prototype.search = function (i) {
        _super.prototype.search.call(this, i);
        this.getAlbumPhotos();
    };
    ;
    AlbumPhotos.prototype.convertDateTime = function (date) {
        return this.utilityService.convertDateTime(date);
    };
    AlbumPhotos.prototype.delete = function (photo) {
        var _this = this;
        var _removeResult = new operationResult_1.OperationResult(false, '');
        this.notificationService.printConfirmationDialog('Are you sure you want to delete the photo?', function () {
            _this.dataService.deleteResource(_this._photosAPI + photo.Id)
                .subscribe(function (res) {
                _removeResult.Succeeded = res.Succeeded;
                _removeResult.Message = res.Message;
            }, function (error) { return console.error('Error: ' + error); }, function () {
                if (_removeResult.Succeeded) {
                    _this.notificationService.printSuccessMessage(photo.Title + ' removed from gallery.');
                    _this.getAlbumPhotos();
                }
                else {
                    _this.notificationService.printErrorMessage('Failed to remove photo');
                }
            });
        });
    };
    AlbumPhotos = __decorate([
        core_1.Component({
            selector: 'album-photo',
            providers: [notificationService_1.NotificationService],
            templateUrl: './app/components/albumPhotos.html',
            bindings: [notificationService_1.NotificationService],
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_deprecated_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [dataService_1.DataService, utilityService_1.UtilityService, notificationService_1.NotificationService, router_deprecated_1.RouteParams])
    ], AlbumPhotos);
    return AlbumPhotos;
}(paginated_1.Paginated));
exports.AlbumPhotos = AlbumPhotos;
