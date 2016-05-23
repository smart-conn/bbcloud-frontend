angular.module('adminControlPanel', [
  'ng-admin',
  'satellizer'
]).config(adminControlPanelConfig)
  .config(signInConfig)
  .run(anonymousRedirect)
  .controller('SignInController', SignInController);

var SIGN_IN_STATE_NAME = 'signIn';
var SIGN_IN_REDIRECT_TO = '/';

function adminControlPanelConfig(NgAdminConfigurationProvider) {
  var nga = NgAdminConfigurationProvider;
  var admin = nga.application('Admin Control Panel');
  nga.configure(admin);
}

function signInConfig($stateProvider, $authProvider) {
  var signInStateName = SIGN_IN_STATE_NAME;
  $authProvider.baseUrl = 'http://localhost:3001/';
  $authProvider.loginUrl = '/auth/administrator/login';
  $stateProvider.state(signInStateName, {
    url: '/sign-in',
    templateUrl: 'views/sign-in.html',
    controller: 'SignInController',
    controllerAs: 'signInCtrl'
  });
}

function anonymousRedirect($rootScope, $state, $auth) {
  var signInStateName = SIGN_IN_STATE_NAME;
  $rootScope.$on('$stateChangeStart', function(evt, toState) {
    if (!$auth.isAuthenticated()) {
      if (toState.name === signInStateName) return;
      console.log('not login, redirect to signin');
      evt.preventDefault();
      return $state.go(signInStateName);
    }
  });
}

function SignInController($auth, $location) {
  var signInRedirectTo = SIGN_IN_REDIRECT_TO;
  this.signIn = function(credentials) {
    return $auth.login(credentials)
      .then(function() {
        $location.path(signInRedirectTo).replace();
      });
  };
}
