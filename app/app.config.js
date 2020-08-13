// angular.
//     module('phonecatApp').
//     config(['$routeProvider', 
//         function config($routeProvider) {
//             $routeProvider.
//                 when('/phones', {
//                     template: '<phone-list></phone-list>'
//                 }).
//                 when('/phones/:phoneId', {
//                     template: '<phone-detail></phone-detail>'
//                 }).
//                 otherwise('/phones');
//         }
// ])

angular.
    module('phonecatApp').
    config(function($stateProvider) {

        const states = [
            {
                name: 'phones',
                url: '/phones',
                component: 'phoneList'
            },
            {
                name: 'user',
                url: '/user',
                template: '<h3>Some user info!</h3>'
            },
            {
                name: 'phoneDetail', 
                url: '/phones/{phoneId}', 
                component: 'phoneDetail',
                resolve: {
                        phone: function(Phone, $transition$) {
                            return Phone.get({phoneId: $transition$.params().phoneId})
                        }
                }
            }            
        ];

        states.forEach(function(state) {
            $stateProvider.state(state);
          });
  });