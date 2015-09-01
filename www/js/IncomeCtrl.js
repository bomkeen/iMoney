angular.module('imoney.controllers.IncomeCtrl', [])
.controller('IncomeCtrl', function ($scope, $filter ,$ionicLoading, $timeout, $ionicPopup) {
    //console.log('Income');
    $scope.incomes = [];
    //$scope.price='15';
    $timeout(
      $scope.doAdd = function () {
        console.log($scope.price);
        console.log($scope.desc);
        console.log($scope.date);
        var data = {};
        data.price = $scope.price;
        data.desc = $scope.desc;
        data.date = $filter('date')($scope.date, "dd/MM/yyyy");
        if (!$scope.date) {
          alert('กรุณาระบุวันที่');
        } else if (!$scope.desc) {
          alert('กรุณาระบุรายละเอียด');
        } else if (!$scope.price) {
          alert('กรุณาระบุราคา');
        } else {

          console.log(JSON.stringify(data));
          $scope.res=JSON.stringify(data);

          //console.log(res);
        }
      },2000
    );

  });
