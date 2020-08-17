"use strict";

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
    function (PhoneDialog, calculate,$timeout) {
      const self = this;
      self.openDialog = PhoneDialog(self);
       
      self.$onInit = function() {
        const $worker = calculate(self.phones);
        $worker.subscribe(function asyncPhonesSetter(data) {    
          $timeout( function setPhones() {
            for(let i=0; i<data.length; ++i) {
              self.phones[i] = data[i];  
            }
          });
        });
      };

      


       
    },
  ],
});
