angular.module("phoneList").factory("calculate", [
  function () {
    const phonesWorker = new Worker("phone-list/phone-list.worker.js");
    let update;
    phonesWorker.addEventListener("message", function ({ data }) {
      update(data);
    });
    return function (phones) {
      phonesWorker.postMessage({ payload: phones, type: "INIT" });
      return {
        subscribe(setPhones) {
          update = setPhones;
        },
        sort(sortKey) {
          phonesWorker.postMessage({ payload: sortKey, type: "SORT" });
        },
        filter(substring) {
          phonesWorker.postMessage({ payload: substring, type: "FILTER" });
        },
      };
    };
  },
]);
