angular.module('imoney.controllers.PaymentCtrl', [])
.controller('PaymentCtrl', function ($scope, $ionicLoading, $timeout, $ionicPopup) {
    $ionicLoading.show({template: 'Loading...'});

    $timeout(function () {
      $scope.items = [
        {id:'1',name: 'ค่าน้ำประปา', pay:'230'},
        {id:'2',name: 'ค่าน้ำนมลูก', pay:'240'},
        {id:'3',name: 'ค่าไฟฟ้า', pay:'260'},
        {id:'4',name: 'ค่าเทอม', pay:'4450'},
        {id:'5',name: 'ค่าเทอม', pay:'47750'},

      ];
      $ionicLoading.hide();
    }, 3000);
    $scope.popUp = function(){
        $ionicPopup.alert({
          title:'Alert Popup',
          template:'Test.....'
        });
    };


  });

