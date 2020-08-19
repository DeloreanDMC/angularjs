import { Component } from "@angular/core";
import * as angular from "angular";

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
        template: "<phone-list [phones]='phones_' [age]='`age`' ></phone-list>",
        controller: ["Phone", "$scope", function(Phone,$scope) {
          $scope.phones_=Phone.query().$promise;
        }]
      },
      {
        name: "profile",
        url: "/profile",
        component: "profile",
      },
      {
        name: "phoneDetail",
        url: "/phones/{phoneId}",
        template:"<phone-detail [phone]='phone_' ></phone-detail>",
        controller: [
        "$scope",  
        "Phone",
        "$transition$", function ($scope,Phone, $transition$) {
          $scope.phone_ = Phone.get({ phoneId: $transition$.params().phoneId });
        }]
      },
      {
        name: "phones.phoneDetail",
        url: "/{phoneId}",
        component: "shortInfo",
        resolve: {
          shortInfo: function (phones, $stateParams) {
            console.log(phones);
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
