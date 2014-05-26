'use strict';

// Declare app level module which depends on filters, and services
angular.module('dimensions', [
//    'ngRoute',
    'ui.router',
    'dimensions.controllers',
    'dimensions.directives'
])

.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('main', {
        url: "/",
        templateUrl: "/partials/main.html"
    })
    .state('social', {
        url: "/social",
        controller: "SocialController",
        templateUrl: "/partials/social/_social.html",
    })
    .state('social.facebook', {
        url: "/facebook",
        templateUrl: "/partials/social/facebook.html",
    })
    .state('social.googleplus', {
        url: "/googleplus",
        templateUrl: "/partials/social/googleplus.html",
    })
    .state('social.instagram', {
        url: "/instagram",
        templateUrl: "/partials/social/instagram.html",
    })
    .state('social.linkedin', {
        url: "/linkedin",
        templateUrl: "/partials/social/linkedin.html",
    })
    .state('social.pinterest', {
        url: "/pinterest",
        templateUrl: "/partials/social/pinterest.html",
    })
    .state('social.twitter', {
        url: "/twitter",
        templateUrl: "/partials/social/twitter.html",
    })
    .state('social.vimeo', {
        url: "/vimeo",
        templateUrl: "/partials/social/vimeo.html",
    })
    .state('social.youtube', {
        url: "/youtube",
        templateUrl: "/partials/social/youtube.html",
    })
    .state('mobile', {
        url: "/mobile",
        controller: "MobileController",
        templateUrl: "/partials/mobile/_mobile.html",
    })
});
