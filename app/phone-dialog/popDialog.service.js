angular.module("popDialog", ["ngDialog", "ngMessages"]).factory("PhoneDialog", [
  "ngDialog",
  function (ngDialog) {
    return function openDialogFactory(other) {
      return function openDialog() {
        ngDialog.open({
          controllerAs: "$ctrl",
          template: "phone-dialog/popDilog.html",
          className: "ngdialog-theme-default",
          controller: function Ctrl(phones) {
            this.len = phones.length;

            this.errorMessages = [
              {
                type: "required",
                text: "Please enter a value for this field",
              },
              {
                type: "firstUppercase",
                text: "First letter should be uppercase",
              },
            ];

            this.onAdd = function () {
              this.phone.id = this.phone.name;
              phones.push(this.phone);
              ngDialog.close();
            };

            this.onClose = function () {
              ngDialog.close();
            };
          },
          resolve: {
            phones: function () {
              return other.phones;
            },
          },
        });
      };
    };
  },
]);
