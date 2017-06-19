var goalbar = angular.module('goalbar', []);

goalbar.controller('GoalBarController', function($scope) {
  $scope.current = 300;
  $scope.goal = 500;
  
  $scope.infoAbove = false;

  var calculateBarPercent = function() {
    var percent = ($scope.current / $scope.goal) * 100;

    if (percent > 100) {
      percent = 100;
    }
    if (percent < 15) {
      $scope.infoAbove = true;
    }

    return percent;
  };
  
  $scope.$watch('current', function() {
    $scope.barPercent = 100 - calculateBarPercent();
    $scope.barStyle = 'transform: translateY(' + $scope.barPercent + '%)';
  });
});
