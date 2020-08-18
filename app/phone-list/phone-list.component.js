import * as angular from "angular";

// Register `phoneList` component, along with its associated controller and template
angular.module("phoneList").component("phoneList", {
  bindings: {
    phones: "<",
    orderProp: "<",
  },
  templateUrl: "phone-list/phone-list.template.html",
  controller: [
    "PhoneDialog",
    "calculate",
    "$timeout",
    "$rootScope",
    function (PhoneDialog, calculate, $timeout) {
      const self = this;

      function asyncPhonesSetter(data) {
        $timeout(function setPhones() {
          self.phones.length = 0;
          for (let i = 0; i < data.length; ++i) {
            self.phones[i] = data[i];
          }
        });
      }

      self.openDialog = PhoneDialog(self);

      self.$onInit = function () {
        self.$worker = calculate(self.phones);
      };

      self.orderPropHandler = function () {
        self.$worker.sort(self.orderProp).then(asyncPhonesSetter);
      };

      self.queryHandler = function () {
        self.$worker.filter(self.query).then(asyncPhonesSetter);
      };
    },
  ],
});
