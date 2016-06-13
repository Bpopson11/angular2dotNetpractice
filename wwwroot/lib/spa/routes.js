"use strict";
const router_deprecated_1 = require('@angular/router-deprecated');
const home_1 = require('./components/home');
const photos_1 = require('./components/photos');
const albums_1 = require('./components/albums');
const albumPhotos_1 = require('./components/albumPhotos');
const account_1 = require('./components/account/account');
exports.Routes = {
    home: new router_deprecated_1.Route({ path: '/', name: 'Home', component: home_1.Home }),
    photos: new router_deprecated_1.Route({ path: '/photos', name: 'Photos', component: photos_1.Photos }),
    albums: new router_deprecated_1.Route({ path: '/albums', name: 'Albums', component: albums_1.Albums }),
    albumPhotos: new router_deprecated_1.Route({ path: '/albums/:id/photos', name: 'AlbumPhotos', component: albumPhotos_1.AlbumPhotos }),
    account: new router_deprecated_1.Route({ path: '/account/...', name: 'Account', component: account_1.Account })
};
exports.APP_ROUTES = Object.keys(exports.Routes).map(r => exports.Routes[r]);
