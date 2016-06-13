"use strict";
const router_deprecated_1 = require('@angular/router-deprecated');
const login_1 = require('./login');
const register_1 = require('./register');
const home_1 = require('../../components/home');
exports.Routes = {
    login: new router_deprecated_1.Route({ path: '/', name: 'Login', component: login_1.Login }),
    register: new router_deprecated_1.Route({ path: '/register', name: 'Register', component: register_1.Register }),
    home: new router_deprecated_1.Route({ path: '/home', name: 'Home', component: home_1.Home })
};
exports.APP_ROUTES = Object.keys(exports.Routes).map(r => exports.Routes[r]);
