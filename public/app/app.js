/**
 * Created by SHERRI on 3/17/15.
 */
//adds routes to our app
angular.module('myApp', ['routerRoutes', 'ngAnimate'])

// create the controller and inject Angular's
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

    // budget page specific controller
    .controller('budgetController', function() {

        var vm = this;

        vm.message = 'budget form';
    })


// contact page controller
    .controller('contactController', function() {

        var vm = this;

        vm.message = 'Contact us';
    });
