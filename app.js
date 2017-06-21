var goalbar = angular.module('goalbar', []);

goalbar.controller('GoalBarController', function($scope) {
  $scope.values = [95.00, 97.50, 100.00];
  $scope.goal = 500;
  $scope.pos = 96.5;
  
  $scope.infoAbove = false;
  
  var max = $scope.values[$scope.values.length - 1] - $scope.values[0];
  var achieved = $scope.pos - $scope.values[0];
  $scope.current = (achieved*500)/max;
   
  var calculateBarPercent = function() {    
    var percent = ($scope.current / $scope.goal) * 100;
    
    percent = percent > 100 ? 100 : percent;
    return percent < 1 ? 0 : percent;
  };
  
  $scope.$watch('current', function() {
    $scope.barPercent = 100 - calculateBarPercent();
    $scope.barStyle = 'transform: translateY(' + $scope.barPercent + '%)';
  });
});