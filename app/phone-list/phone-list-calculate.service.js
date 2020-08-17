angular.module("phoneList").factory("calculate", [
  "$q",
  function ($q) {
    const phonesWorker = new Worker("phone-list/phone-list.worker.js");
    let defer = $q.defer();
    phonesWorker.addEventListener("message", function ({ data }) {
      defer.resolve(data);
    });

    return function (phones) {
      phonesWorker.postMessage({ payload: phones, type: "INIT" });
      return {
        sort(sortKey) {
          defer = $q.defer();
          phonesWorker.postMessage({ payload: sortKey, type: "SORT" });
          return defer.promise;
        },
        filter(substring) {
          defer = $q.defer();
          phonesWorker.postMessage({ payload: substring, type: "FILTER" });
          return defer.promise;
        },
      };
    };
  },
]);
