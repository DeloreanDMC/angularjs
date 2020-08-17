angular
  .module("compileExample", [], function ($compileProvider) {
    $compileProvider.directive("compile", function ($compile) {
      return function (scope, element, attrs) {
        scope.$watch(
          function (scope) {
            // Следит за изменением 'compile' выражения
            return scope.$eval(attrs.compile);
          },
          function (value) {
            // Когда 'compile' выражение изменится
            // присваиваем его текущему DOM
            element.html(value);

            // Компилирует новый DOM и связывает его с текущей областью видимости
            // Компилируются только '.childNodes', чтобы не попасть в бесконечный цикл
            // компиляции самого себя
            $compile(element.contents())(scope);

            var element2 = angular.element('<p>{{total}}</p>');
            scope.total = "350$";
            element.append($compile(element2)(scope));
          }
        );
      };
    });
  })
  .component("compileComponent", {
    template: `
      <div>
        <input ng-model="name"> <br/>
        <textarea ng-model="html"></textarea> <br/>
        <div compile="html"></div>
      </div>`,

    controller: [
      "$scope",
      function ($scope) {
        $scope.name = "AngularJS";
        $scope.html = "Hello {{name}}";
      },
    ],
  });
