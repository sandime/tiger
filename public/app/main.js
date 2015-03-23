/**
 * Created by SHERRI on 3/20/15.
 */


/*function budgetController($scope) {
   $scope.$watch('rent + utilities', function (value) {
      $scope.totalExpenses = value;
  });
}*/

//calculations for budget
function budgetController($scope) {

    $scope.totalExpenses = function () {
        var rent = $scope.rent;
        var utilities = $scope.utilities;
        var autoPayment = $scope.autoPayment;
        return rent + utilities + autoPayment;
    };


    $scope.difference = function () {
        var totalExpenses = $scope.totalExpenses();
        var income = $scope.income;
        return income + totalExpenses;
    };


}
