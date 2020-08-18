import * as angular from "angular";

angular.module("popDialog").factory("PhoneDialog", [
  "ngDialog",
  "$timeout",
  function (ngDialog, $timeout) {
    return function openDialogFactory() {
      return function openDialog(phones) {
        return ngDialog.open({
          controllerAs: "$ctrl",
          template: "phone-dialog/popDilog.html",
          className: "ngdialog-theme-default",
          controller: function Ctrl() {
            var self = this;
            self.len = phones.length;

            self.errorMessages = [
              {
                type: "required",
                text: "Please enter a value for this field",
              },
              {
                type: "firstUppercase",
                text: "First letter should be uppercase",
              },
            ];

            self.onAdd = function () {
              self.phone.id = self.phone.name;
              $timeout(() => phones.push(self.phone));
              ngDialog.close();
            };

            self.onClose = function () {
              ngDialog.close();
            };
          },
        });
      };
    };
  },
]);
