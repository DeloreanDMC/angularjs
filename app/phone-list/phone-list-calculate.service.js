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
          const promise = new Promise((res) => (resolver = res));
          phonesWorker.postMessage({ payload: sortKey, type: "SORT" });
          return promise;
        },
        filter(substring) {
          const promise = new Promise((res) => (resolver = res));
          phonesWorker.postMessage({ payload: substring, type: "FILTER" });
          return promise;
        },
      };
    };
  },
]);
