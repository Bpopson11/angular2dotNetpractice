"use strict";
var router_deprecated_1 = require('@angular/router-deprecated');
var login_1 = require('./login');
var register_1 = require('./register');
var home_1 = require('../../components/home');
exports.Routes = {
    login: new router_deprecated_1.Route({ path: '/', name: 'Login', component: login_1.Login }),
    register: new router_deprecated_1.Route({ path: '/register', name: 'Register', component: register_1.Register }),
    home: new router_deprecated_1.Route({ path: '/home', name: 'Home', component: home_1.Home })
};
exports.APP_ROUTES = Object.keys(exports.Routes).map(function (r) { return exports.Routes[r]; });
