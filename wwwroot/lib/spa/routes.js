"use strict";
var router_deprecated_1 = require('@angular/router-deprecated');
var home_1 = require('./components/home');
var photos_1 = require('./components/photos');
var albums_1 = require('./components/albums');
var albumPhotos_1 = require('./components/albumPhotos');
var account_1 = require('./components/account/account');
exports.Routes = {
    home: new router_deprecated_1.Route({ path: '/', name: 'Home', component: home_1.Home }),
    photos: new router_deprecated_1.Route({ path: '/photos', name: 'Photos', component: photos_1.Photos }),
    albums: new router_deprecated_1.Route({ path: '/albums', name: 'Albums', component: albums_1.Albums }),
    albumPhotos: new router_deprecated_1.Route({ path: '/albums/:id/photos', name: 'AlbumPhotos', component: albumPhotos_1.AlbumPhotos }),
    account: new router_deprecated_1.Route({ path: '/account/...', name: 'Account', component: account_1.Account })
};
exports.APP_ROUTES = Object.keys(exports.Routes).map(function (r) { return exports.Routes[r]; });
