'use strict';

angular.module('dimensions.controllers', [])
.controller('ApplicationController', function($scope) {
})
.controller('SocialController', function($scope) {
    $scope.socialNetworks = [
        {
            "name": "Facebook",
            "class": "bg-facebook",
            "date": "May 24, 2014",
            "state": "social.facebook"
        },
        {
            "name": "Google+",
            "class": "bg-googleplus",
            "date": "May 24, 2014",
            "state": "social.googleplus"
        },
        {
            "name": "Instagram",
            "class": "bg-instagram",
            "date": "May 24, 2014",
            "state": "social.instagram"
        },
        {
            "name": "LinkedIn",
            "class": "bg-linkedin",
            "date": "May 24, 2014",
            "state": "social.linkedin"
        },
        {
            "name": "Pinterest",
            "class": "bg-pinterest",
            "date": "May 24, 2014",
            "state": "social.pinterest"
        },
        {
            "name": "Twitter",
            "class": "bg-twitter",
            "date": "May 24, 2014",
            "state": "social.twitter"
        },
        {
            "name": "Vimeo",
            "class": "bg-vimeo",
            "date": "May 24, 2014",
            "state": "social.vimeo"
        },
        {
            "name": "YouTube",
            "class": "bg-youtube",
            "date": "May 24, 2014",
            "state": "social.youtube"
        }
    ]
})
.controller('MobileController', function($scope) {
    $scope.mobileOS = [
        {
            "name": "Android",
            "class": "bg-android",
            "date": "May 24, 2014"
        },
        {
            "name": "Apple",
            "class": "bg-apple",
            "date": "May 24, 2014"
        },
        {
            "name": "BlackBerry",
            "class": "bg-blackberry",
            "date": "May 24, 2014"
        }
    ]
})
