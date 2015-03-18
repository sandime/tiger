/**
 * Created by SHERRI on 3/17/15.
 */

angular.module('app.routes', ['ngRoute'])

    .config(function($routeProvider, $locationProvider) {

        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'app/views/pages/home.html'
            })

            // login page
            .when('/login', {
                templateUrl : 'app/views/pages/login.html',
                controller  : 'mainController',
                controllerAs: 'login'
            })

            // show all users
            .when('/about', {
                templateUrl: 'app/views/pages/about.html',
                controller: 'aboutController',
                controllerAs: 'about'
            })

            // budget
            .when('/budget', {
                templateUrl: 'app/views/pages/budget.html',
                controller: 'budgetController',
                controllerAs: 'budget'
            })

            // page to edit a user
            .when('/contact', {
                templateUrl: 'app/views/pages/contact.html',
                controller: 'contactController',
                controllerAs: 'contact'
            });

        $locationProvider.html5Mode(true);

    });
