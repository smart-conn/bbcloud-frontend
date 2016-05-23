function headerConfig() {
  return [
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
        '<a ui-sref="signOut"">注销</a>',
      '</li>',
    '</ul>'
  ].join('');
}
