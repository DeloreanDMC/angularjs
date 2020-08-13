const myApp = angular.module('myApp',['ui.router']);

myApp.config(['$stateProvider', function($stateProvider) {
    
    const aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>Its the UI-Router hello world app!</h3>'
    }

    const helloGalaxy = {
        name: 'hello',
        url: '/hello',
        component: 'hello'
    }

    $stateProvider.state(aboutState);
    $stateProvider.state(helloGalaxy);
}]);