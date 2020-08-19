import * as angular from "angular";

angular.module("phoneList").factory("calculate", [
  function () {
    const phonesWorker = new Worker("phone-list/phone-list.worker.js");
    let resolver;
    phonesWorker.addEventListener("message", function ({ data }) {
      resolver(data);
    });

    return function (phones) {
      console.log(phones);
      phonesWorker.postMessage({ payload: phones, type: "INIT" });
      return {
        sort(sortKey) {
          return new Promise((res) => {
            resolver = res;
            phonesWorker.postMessage({ payload: sortKey, type: "SORT" });
          });
        },
        filter(substring) {
          return new Promise((res) => {
            resolver = res;
            phonesWorker.postMessage({ payload: substring, type: "FILTER" });
          });
        },
      };
    };
  },
]);
