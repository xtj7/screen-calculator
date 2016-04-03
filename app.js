define(['angular'],
    function (angular) {
        'use strict';

        var app = angular.module('screenApp', []);
        app.init = function () {
            angular.bootstrap(document, ['screenApp']);
        };

        return app;
    });