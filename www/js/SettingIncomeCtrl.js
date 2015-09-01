angular.module('imoney.controllers.SettingIncomeCtrl', [])
.controller('SettingIncomeCtrl', function ($scope, $ionicPlatform, $ionicPopup) {
    console.log('SettingIncomCtrl');
    //console.debug('SettingIncomCtrl');
    //console.error('SettingIncomCtrl');

/*
    $scope.items = [];

    $scope.getList = function () {

      $ionicPlatform.ready(function () {

        var sql = 'SELECT * FROM income_groups';

        $cordovaSQLite.execute(window.db, sql, [])
          .then(function (res) {

            var total = res.rows.length;

            for(var i = 0; i <= total -1; i++) {
              var obj = {};
              obj.name = res.rows.item(i).name;
              obj.id = res.rows.item(i).id;
              $scope.items.push(obj);
              //console.log(JSON.stringify(res.rows.item(i)));
            }
          });

      });

    };

    $scope.add = function () {
      console.log($scope.item.name);
      if (!$scope.item.name) {
        $ionicPopup.alert({
          title: 'เกิดข้อผิดพลาด',
          template: 'กรุณาระบุชื่อรายการ'
        });
      } else {
        var sql = 'INSERT INTO income_groups (name) VALUES(?)';

        $cordovaSQLite.execute(window.db, sql, [$scope.item.name])
          .then(function (res) {

            var insertId = res.insertId;

            $scope.items.push({id: insertId, name: $scope.item.name});

            //$ionicPopup.alert({
            //  title: 'ผลการบันทึก',
            //  template: 'บันทึกเสร็จเรียบร้อยแล้ว'
            //});

            $scope.item.name = null;

          }, function (err) {
            $ionicPopup.alert({
              title: 'เกิดข้อผิดพลาด',
              template: JSON.stringify(err)
            });
          });
      }

    };

    $scope.doRemove = function (id) {
      var sql = "DELETE FROM income_groups WHERE id=?";

      $cordovaSQLite.execute(window.db, sql, [id])
        .then(function (res) {

        }, function (err) {
          console.log(err);
        })

    };

    $scope.confirmRemove = function(id) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'ยืนยันการลบ',
        template: 'คุณต้องการลบรายการนี้ใช่หรือไม่?'
      });
      confirmPopup.then(function(res) {
        if(res) {
          var idx = _.findIndex($scope.items, {id: id});
          $scope.items.splice(idx, 1);
          console.log('Success');
        } else {
          console.log('Error');
        }
      });
    };

    $scope.getList();
*/
  });
