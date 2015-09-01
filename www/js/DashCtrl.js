angular.module('imoney.controllers.DashCtrl', [])
.controller('DashCtrl', function ($scope) {
    //console.log('Out put DashCtrl');
    //alert('Out put DashCtrl');

    $scope.list=[
      {id:1, desc:'ค่าน้ำ', price:'300'},
      {id:2, desc:'ค่าไฟ', price:'345'},
      {id:3, desc:'ค่าน้ำมัน', price: '2342'},
      {id:4, desc:'ค่าน้ำมันคน', price: '2300.7979879879789'},
    ];

  });
