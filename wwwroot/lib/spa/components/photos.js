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
let Photos = class Photos extends paginated_1.Paginated {
    constructor(photosService) {
        super(0, 0, 0);
        this.photosService = photosService;
        this._photosAPI = 'api/photos/';
    }
    ngOnInit() {
        this.photosService.set(this._photosAPI, 12);
        this.getPhotos();
    }
    getPhotos() {
        this.photosService.get(this._page)
            .subscribe(res => {
            var data = res.json();
            this._photos = data.Items;
            this._page = data.Page;
            this._pagesCount = data.TotalPages;
            this._totalCount = data.TotalCount;
        }, error => console.error('Error: ' + error));
    }
    search(i) {
        super.search(i);
        this.getPhotos();
    }
    ;
};
Photos = __decorate([
    core_1.Component({
        selector: 'photos',
        providers: [dataService_1.DataService],
        templateUrl: './app/components/photos.html',
        bindings: [dataService_1.DataService],
        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_deprecated_1.RouterLink]
    }), 
    __metadata('design:paramtypes', [dataService_1.DataService])
], Photos);
exports.Photos = Photos;
