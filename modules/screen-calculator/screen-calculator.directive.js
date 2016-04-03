define(['app', 'modules/screen-calculator/screen-calculator.controller'], function (app) {

    // Screen calculator directive
    app.directive('screenCalculator', function () {
        return {
            restrict: 'A',
            controller: 'ScreenCalculatorController',
            controllerAs: 'scc',
            bindToController: true,
            templateUrl: 'modules/screen-calculator/screen-calculator.template.html'
        };
    });
});