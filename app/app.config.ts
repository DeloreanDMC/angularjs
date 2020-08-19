import { jsmodule } from "./app.module";

const profileState = {
  name: "profile",
  url: "/profile",
  component: "profile",
};

jsmodule.config(['$stateProvider', ($stateProvider) => {
  $stateProvider.state(profileState);
}]);


jsmodule.config([
  "$locationProvider",
  "$urlRouterProvider",
  function ($locationProvider, $urlRouterProvider) {
    // HTML5 ref
    $locationProvider.html5Mode(true).hashPrefix("!");
    $urlRouterProvider.otherwise("/phones");
  },
]);
