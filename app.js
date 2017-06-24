var goalbar = angular.module('goalbar', []);


goalbar.controller('GoalBarController', function($scope) {
  $scope.values = [15, 25, 35, 45, 55, 65];  
  
  // $scope.goal = max value from array
  $scope.goal = $scope.values[$scope.values.length - 1];   
  $scope.current = 58;
  $scope.infoAbove = false;  
 
  $scope.$watch('current', function() {
    var basePer =(100/$scope.values.length); 
    // step value = (difference between 2 consecutive elements of sorted array
    var stepValue = $scope.values[1] - $scope.values[0];
    var minVal = $scope.values[0];
    
    //$scope.barPercent = 100 - (basePer + ($scope.current - minVal)*(basePer/stepValue));        
    $scope.barPercent = 100 - basePer * (1 + ($scope.current - minVal) * (1 / stepValue));
    $scope.barStyle = 'transform: translateY(' + $scope.barPercent + '%)';    
  });
});
