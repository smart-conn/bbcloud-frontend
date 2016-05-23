var SIGN_IN_STATE_NAME = 'signIn';
var SIGN_OUT_STATE_NAME = 'signOut';

var SIGN_IN_REDIRECT_TO = '/dashboard';
var SIGN_OUT_REDIRECT_TO = '/sign-in';

angular.module('adminControlPanel', [
  'ng-admin',
  'satellizer'
]).config(adminControlPanelConfig)
  .config(signInConfig)
  .run(anonymousRedirect)
  .controller('SignInController', SignInController);

function adminControlPanelConfig(NgAdminConfigurationProvider) {
  var nga = NgAdminConfigurationProvider;
  var admin = nga.application('Admin Control Panel').baseApiUrl('/');

  admin.addEntity(nga.entity('administrators'));
  admin.addEntity(nga.entity('roles'));
  admin.addEntity(nga.entity('permissions'));
  admin.addEntity(nga.entity('manufacturers'));
  administratorConfig(nga, admin);
  roleConfig(nga, admin);
  permissionConfig(nga, admin);
  manufacturerConfig(nga, admin);

  admin.header([
    '<div class="navbar-header">',
      '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">',
        '<span class="sr-only">Toggle navigation</span>',
        '<span class="icon-bar"></span>',
        '<span class="icon-bar"></span>',
        '<span class="icon-bar"></span>',
      '</button>',
      '<a class="navbar-brand" href="#" ng-click="appController.displayHome()">{{::appController.applicationName}}</a>',
    '</div>',
    '<ul class="nav navbar-top-links navbar-right hidden-xs">',
      '<li>',
        '<a ui-sref="signOut"">logout</a>',
      '</li>',
    '</ul>'
  ].join(''));

  nga.configure(admin);
}

function signInConfig($stateProvider, $authProvider) {
  var signInStateName = SIGN_IN_STATE_NAME;
  var signOutStateName = SIGN_OUT_STATE_NAME;
  var signOutRedirectTo = SIGN_OUT_REDIRECT_TO;
  $authProvider.baseUrl = 'http://localhost:3001/';
  $authProvider.loginUrl = '/auth/administrator/login';
  $stateProvider.state(signInStateName, {
    url: '/sign-in',
    templateUrl: 'views/sign-in.html',
    controller: 'SignInController',
    controllerAs: 'signInCtrl'
  });
  $stateProvider.state(signOutStateName, {
    url: '/sign-out',
    controller: function($auth, $location) {
      $auth.logout();
      $location.path(signOutRedirectTo);
    }
  });
}

function anonymousRedirect($rootScope, $state, $auth) {
  var signInStateName = SIGN_IN_STATE_NAME;
  var signOutStateName = SIGN_OUT_STATE_NAME;
  $rootScope.$on('$stateChangeStart', function(evt, toState) {
    if (!$auth.isAuthenticated()) {
      if (toState.name === signInStateName) return;
      if (toState.name === signOutStateName) return;
      console.log('not login, redirect to signin');
      evt.preventDefault();
      return $state.go(signInStateName);
    }
  });
}

function SignInController($auth, $location) {
  var signInRedirectTo = SIGN_IN_REDIRECT_TO;
  this.signIn = function(credentials) {
    $auth.login(credentials)
      .then(function() {
        $location.path(signInRedirectTo);
      });
  };
}
