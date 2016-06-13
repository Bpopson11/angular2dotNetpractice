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
const paginated_1 = require('../core/common/paginated');
const dataService_1 = require('../core/services/dataService');
const utilityService_1 = require('../core/services/utilityService');
const notificationService_1 = require('../core/services/notificationService');
const routes_1 = require('../routes');
let Albums = class Albums extends paginated_1.Paginated {
    constructor(albumsService, utilityService, notificationService, router) {
        super(0, 0, 0);
        this.albumsService = albumsService;
        this.utilityService = utilityService;
        this.notificationService = notificationService;
        this.router = router;
        this._albumsAPI = 'api/albums/';
        this.routes = routes_1.Routes;
    }
    ngOnInit() {
        this.routes = routes_1.Routes;
        this.albumsService.set(this._albumsAPI, 3);
        this.getAlbums();
    }
    getAlbums() {
        this.albumsService.get(this._page)
            .subscribe(res => {
            var data = res.json();
            this._albums = data.Items;
            this._page = data.Page;
            this._pagesCount = data.TotalPages;
            this._totalCount = data.TotalCount;
        }, error => {
            if (error.status == 401 || error.status == 404) {
                this.notificationService.printErrorMessage('Authentication required');
                this.utilityService.navigateToSignIn();
            }
        });
    }
    search(i) {
        super.search(i);
        this.getAlbums();
    }
    ;
    convertDateTime(date) {
        return this.utilityService.convertDateTime(date);
    }
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
exports.Albums = Albums;
