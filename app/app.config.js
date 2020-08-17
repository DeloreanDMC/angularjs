angular.module("phonecatApp").config([
  "$stateProvider",
  "$locationProvider",
  "$urlRouterProvider",
  function ($stateProvider, $locationProvider, $urlRouterProvider) {
    // HTML5 ref
    $locationProvider.html5Mode(true).hashPrefix("!");

    const states = [
      {
        name: "phones",
        url: "/phones",
        component: "phoneList",
        resolve: {
          phones: [
            "Phone",
            function PhoneListController(Phone) {
              return Phone.query();
            },
          ],
          orderProp: function age() {
            return "age";
          },
        },
      },
      {
        name: "user",
        url: "/user",
        component: "compileComponent",
      },
      {
        name: "phoneDetail",
        url: "/phones/{phoneId}",
        component: "phoneDetail",
        resolve: {
          phone: [
            "Phone",
            "$transition$",
            function (Phone, $transition$) {
              return Phone.get({ phoneId: $transition$.params().phoneId });
            },
          ],
        },
      },
      {
        name: "phones.phoneDetail",
        url: "/{phoneId}",
        component: "shortInfo",
        resolve: {
          shortInfo: function (phones, $stateParams) {
            return phones.find((el) => el.id === $stateParams.phoneId);
          },
        },
      },
    ];

    states.forEach(function (state) {
      $stateProvider.state(state);
    });

    $urlRouterProvider.otherwise("/phones");
  },
]);
