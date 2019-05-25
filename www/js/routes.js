angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('mobileAppsTraining', {
    url: '/page1',
    templateUrl: 'templates/mobileAppsTraining.html',
    controller: 'mobileAppsTrainingCtrl'
  })

  .state('androidOS', {
    url: '/page2',
    templateUrl: 'templates/androidOS.html',
    controller: 'androidOSCtrl'
  })

  .state('appleIOS', {
    url: '/page4',
    templateUrl: 'templates/appleIOS.html',
    controller: 'appleIOSCtrl'
  })

  .state('contactUs', {
    url: '/page5',
    templateUrl: 'templates/contactUs.html',
    controller: 'contactUsCtrl'
  })

  .state('sliderPage', {
    url: '/page6',
    templateUrl: 'templates/sliderPage.html',
    controller: 'sliderPageCtrl'
  })

$urlRouterProvider.otherwise('/page6')


});