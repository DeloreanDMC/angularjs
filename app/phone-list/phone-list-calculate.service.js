angular.module("phoneList")
    .factory('calculate',['$q',function($q) {
        const phonesWorker = new Worker('phone-list/phone-list.worker.js');
        let update;
        phonesWorker.addEventListener('message', function({data}) {
            update(data);
        })
        return function(phones) {
            phonesWorker.postMessage({payload:phones, type:"INIT"});
            return {
                subscribe(setPhones) {
                    update = setPhones;
                }
            }
        }

    }]);