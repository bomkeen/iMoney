// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('imoney', [
  'ionic', 'imoney.controllers.DashCtrl',
  'imoney.controllers.PaymentCtrl',
  'imoney.controllers.SettingCtrl',
  'imoney.controllers.IncomeCtrl',
  'imoney.controllers.SettingIncomeCtrl',
  'imoney.controllers.IncomeAddCtrl',
  'imoney.controllers.PaymentAddCtrl',
  'imoney.Incomserv',
  'chart.js', 'ngCordova'])

.run(function($ionicPlatform, $cordovaStatusbar, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      $cordovaStatusbar.overlaysWebView(true);
      $cordovaStatusbar.styleHex('#3F51B5');
    }

    // Create sql
    //window.db = $cordovaSQLite.openDB({
    //  name: "imoney.db"
    //});config

  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.income', {
      url: '/income',
      views: {
        'tab-income': {
          templateUrl: 'templates/tab-income.html',
          controller: 'IncomeCtrl'
        }
      }
    })
    .state('tab.income-add', {
      url: '/income-add',
      views: {
        'tab-income': {
          templateUrl: 'templates/income-add.html',
          controller: 'IncomeAddCtrl'
        }
      }
    })

    .state('tab.payment-add', {
      url: '/payment-add',
      views: {
        'tab-payment': {
          templateUrl: 'templates/payment-add.html',
          controller: 'PaymentAddCtrl'
        }
      }
    })
    //.state('tab.chat-detail', {
    //  url: '/chats/:chatId',
    //  views: {
    //    'tab-chats': {
    //      templateUrl: 'templates/chat-detail.html',
    //      controller: 'ChatDetailCtrl'
    //    }
    //  }
    //})

  .state('tab.payment', {
    url: '/payment',
    views: {
      'tab-payment': {
        templateUrl: 'templates/tab-payment.html',
        controller: 'PaymentCtrl'
      }
    }
  })
  .state('tab.setting', {
    url: '/setting',
    views: {
      'tab-setting': {
        templateUrl: 'templates/tab-setting.html',
        controller: 'SettingCtrl'
      }
    }
  })
    .state('tab.setting-income-group', {
    url: '/tab/setting-income-group',
    views: {
      'tab-setting': {
        templateUrl: 'templates/tab-setting-income-group.html',
        controller: 'SettingCtrl'
      }
    }
  })
  .state('tab.setting-income-grou', {
    url: '/setting-income-group',
    views: {
      'tab-setting': {
        templateUrl: 'templates/add-income-group.html',
        controller: 'SettingIncomeCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
