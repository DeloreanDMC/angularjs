angular.
    module('popDialog')
    .directive('firstUppercase', function () {
        return {
            require: 'ngModel',
            link: function(_scope, _elm, _attr, ctrl) {
              
                ctrl.$validators.firstUppercase = function (modelValue, _viewValue) {
                    return modelValue && modelValue[0]===modelValue[0].toUpperCase();
                }
            }
        }
    })