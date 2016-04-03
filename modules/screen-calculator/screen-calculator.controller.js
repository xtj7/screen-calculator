define(['app'], function (app) {
    var controller = function () {
        this.precision = 0;

        this.form = {
            width: null,
            height: null,
            diagonal: null,
            ratio: '1.33333'
        };

        this.calculate = function () {
            if(parseFloat(this.form.width) > 0) {
                // Calculate height from width and ratio
                this.form.height = calc_height(this.form.width, this.form.ratio);
                this.form.diagonal = calc_diagonal(this.form.width, this.form.height);
            } else if(parseFloat(this.form.height) > 0) {
                // Calculate width from height and ratio
                this.form.width = calc_width(this.form.height, this.form.ratio);
                this.form.diagonal = calc_diagonal(this.form.width, this.form.height);
            } else if(parseFloat(this.form.diagonal) > 0) {
                // Calculate width from diagonal and ratio
                this.form.width = calc_width_from_diagonal(this.form.diagonal, this.form.ratio);
                this.form.height = calc_height(this.form.width, this.form.ratio);
            }
        };

        function calc_diagonal(width, height) {
            return Math.round(Math.sqrt(Math.pow(parseFloat(width), 2) + Math.pow(parseFloat(height), 2)), controller.precision);
        }

        function calc_width(height, ratio) {
            return Math.round(parseFloat(height) * parseFloat(ratio), controller.precision);
        }

        function calc_height(width, ratio) {
            return Math.round(parseFloat(width) / parseFloat(ratio), controller.precision);
        }

        function calc_width_from_diagonal(diagonal, ratio) {
            return Math.round(Math.sqrt(
                Math.pow(parseFloat(diagonal), 2) / (
                    1 + (1/Math.pow(parseFloat(ratio), 2))
                )
            ), controller.precision);
        }
    };

    app.controller('ScreenCalculatorController', controller);
});