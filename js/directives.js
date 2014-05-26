'use strict';

angular.module('dimensions.directives', [])
.directive('holder', function ($compile) {
    return {
        link: function (scope, element, attrs) {
            element.addClass('placeholder');
            Holder.run({ images: element[0], nocss: true });
        }
    };
});
