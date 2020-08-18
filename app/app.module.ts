"use strict";
import * as angular from "angular";

// Define the `phonecatApp` module
angular.module("phonecatApp", [
  // ...which depends on the `phoneList` module
  "ngAnimate",
  "ngDialog",
  "core",
  "ui.router",
  "phoneDetail",
  "popDialog",
  "phoneList",
  "compileExample",
]);
