require.config({
    paths: {
        'angular': 'node_modules/angular/angular.min'
    },
    shim: {
        'angular': {exports: 'angular'}
    },
    baseUrl: './',
    callback: function() {
        require(['app', 'routing'], function (app, routing) {
            'use strict';

            app.init();
        });
    }
});