angular.module('imoney.controllers.IncomeAddCtrl', [])
.controller('IncomeAddCtrl', function ($scope, $cordovaSQLite, Incomserv) {

    $scope.incomes = [];
    //$scope.price='15';
    $scope.doAdd = function () {
      console.log($scope.price);
      console.log($scope.desc);
      console.log($scope.date);
      var data = {};
      data.price = $scope.price;
      data.desc = $scope.desc;
      data.date = $scope.date;
      if (!$scope.date) {
        alert('กรุณาระบุวันที่');
      } else if (!$scope.desc) {
        alert('กรุณาระบุรายละเอียด');
      } else if (!$scope.price) {
        alert('กรุณาระบุราคา');
      } else {
        var res = Incomserv.doAdd(data);

            console.log(JSON.stringify(res));
        $scope.res=JSON.stringify(res);

        //console.log(res);
      }
    };
  });

