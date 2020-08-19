"use strict";
import * as angular from "angular";
import uiRouter from "@uirouter/angularjs";
import { upgradeModule } from "@uirouter/angular-hybrid";

// Define the `phonecatApp` module
export const jsmodule = angular.module("phonecatApp", [
  // ...which depends on the `phoneList` module
  uiRouter,
  upgradeModule.name,
  "ngAnimate",
  "ngDialog",
  "core",
  "ui.router",
  "phoneDetail",
  "popDialog",
  "phoneList",
  "compileExample",
]);
