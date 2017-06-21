var goalbar = angular.module('goalbar', []);

goalbar.controller('GoalBarController', function($scope) {
  //$scope.current = 280;
  $scope.values = [95.00, 97.50, 100.00, 102.50, 105, 107.5];
  $scope.goal = 500;
  $scope.pos = 103.78;
  
  $scope.infoAbove = false;
  
  var max = $scope.values[$scope.values.length - 1] - $scope.values[0];
  var achieved = $scope.pos - $scope.values[0];
  $scope.current = (achieved*500)/max;
  
  console.log("Max/Achieved/$scope.current : " + max + '/' + achieved + '/' + $scope.current);  
  var calculateBarPercent = function() {    
    var percent = ($scope.current / $scope.goal) * 100;
    

    return percent < 1 ? 0 : percent;
  };
  
  $scope.$watch('current', function() {
    $scope.barPercent = 100 - calculateBarPercent();
    $scope.barStyle = 'transform: translateY(' + $scope.barPercent + '%)';
    console.log("Ssd" + $scope.barPercent);
  });
});