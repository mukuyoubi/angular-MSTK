angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {

      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })

    .state('usr', {
    url: '/usr',
    templateUrl: 'templates/usr.html',
    controller: 'UsrCtrl'
  })
    .state('search', {
    url: '/search',
    templateUrl: 'templates/search.html',
    controller: 'SearchCtrl'
  })
    .state('content', {
    url: '/content/:videoId',
    templateUrl: 'templates/content.html',
    // params: {
    //     "videoId": "videoId" // 这个地方就可以随便你用了. 因为这个参数没在state的url中体现出来
    // },
    controller: 'ContentCtrl'
  })

  $urlRouterProvider.otherwise('/home');

});
