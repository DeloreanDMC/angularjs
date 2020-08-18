import * as angular from "angular";

angular.module("popDialog").directive("focus", function () {
  return {
    controller: function controller($element, $timeout) {
      this.$postLink = function () {
        $element.css("background", "#FF00FF");
        $timeout(function () {
          $element[0].focus();
        });

        $element.on("blur", function () {
          $element.css("background", "#FFFFFF");
        });
      };
    },
  };
});
