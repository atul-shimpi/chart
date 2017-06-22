var goalbar = angular.module('goalbar', []);

goalbar.controller('GoalBarController', function($scope) {
  // dont change this
  $scope.fixedValues = [95.00, 97.50, 100.00, 102.50, 105, 107.5];
  
  // change this
  $scope.values = [95.00, 97.50, 100.00];
  $scope.goal = 500;
  $scope.pos = 97.78;
  
  $scope.infoAbove = false;
  
  var max = $scope.fixedValues[$scope.fixedValues.length - 1] - $scope.fixedValues[0];
  var achieved = $scope.pos - $scope.fixedValues[0];
  $scope.current = (achieved*500)/max;
   
  var calculateBarPercent = function() {    
    var percent = ($scope.current / $scope.goal) * 100;  
    return percent < 1 ? 0 : percent;
  };
  
  $scope.showLabel = function(index) {
    var flag = (index <= $scope.values.length);
    console.log(index + '/' + flag);
    console.log("index " + (index < $scope.values.length) ? 'block' : 'none');
    if (flag) 
      return 'block;'
    else
      return 'none';
    
  }
  
  $scope.$watch('current', function() {

    $scope.barPercent = 100 - calculateBarPercent();
    $scope.barStyle = 'transform: translateY(' + $scope.barPercent + '%)';
    console.log("Ssd" + $scope.barPercent);
  });
});
