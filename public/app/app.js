
//adds routes to our app
//learning http://jsfiddle.net/sandime/zg1n8tm5/2/
//var myModule = angular.module('myModule', []);
//myModule.controller('myController', function($scope) {
//}); var myApp =

angular.module('myApp', ['routerRoutes', 'ngAnimate'])

//angular.module('myApp', ['ngAnimate', 'routerRoutes', 'app.route', 'authService', 'mainCtrl', 'userCtrl', 'userService'])

//create the controller and inject Angular's
// this will be the controller for the ENTIRE site
    .controller('mainController', function() {

        var vm = this;

        // create a bigMessage variable to display in our view
        vm.bigMessage = 'Smart money for creatives ...';
    })

// home page specific controller
    .controller('homeController', function() {

        var vm = this;

        vm.message = 'This is the home page!';
    })

    // login page specific controller
    .controller('loginController', function() {

        var vm = this;

        vm.message = 'login';
    })

// about page controller
    .controller('aboutController', function() {

        var vm = this;

        vm.message = 'about page';
    })


// contact page controller
    .controller('contactController', function() {

        var vm = this;

        vm.message = 'Contact us';
    })

    .controller('budgetController', function() {
        // budget page specific controller
        function budgetController($scope) {
            $scope.$watch('rent + utilities', function (value) {
                $scope.totalExpenses = value;
            });
        }
    });


/*var myApp = angular.module('myApp',[]);

 myApp.controller('ContactController', ['$scope', function($scope) {
 $scope.contacts = ["hi@email.com", "hello@email.com"];

 $scope.add = function() {
 $scope.contacts.push($scope.contact);
 $scope.contact = "";
 }
 }]);

 http://blog.jdriven.com/2013/03/how-to-create-singleton-angularjs-services-in-4-different-ways/
 http://jonathancreamer.com/working-with-all-the-different-kinds-of-scopes-in-angular/
 */