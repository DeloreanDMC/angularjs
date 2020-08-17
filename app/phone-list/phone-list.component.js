"use strict";

// Register `phoneList` component, along with its associated controller and template
angular.module("phoneList", ["popDialog"]).component("phoneList", {
  bindings: {
    phones: "<",
    orderProp: "<",
  },
  templateUrl: "phone-list/phone-list.template.html",
  controller: [
    "PhoneDialog",
    function (PhoneDialog) {
      this.openDialog = PhoneDialog(this);
    },
  ],
});
