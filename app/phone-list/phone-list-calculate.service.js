angular.module("phoneList").factory("calculate", [
  "$q",
  function () {
    const phonesWorker = new Worker("phone-list/phone-list.worker.js");
    let resolver;
    phonesWorker.addEventListener("message", function ({ data }) {
      resolver(data);
    });

    return function (phones) {
      phonesWorker.postMessage({ payload: phones, type: "INIT" });
      return {
        sort(sortKey) {
          phonesWorker.postMessage({ payload: sortKey, type: "SORT" });
          return new Promise((res) => (resolver = res));
        },
        filter(substring) {
          phonesWorker.postMessage({ payload: substring, type: "FILTER" });
          return new Promise((res) => (resolver = res));
        },
      };
    };
  },
]);
