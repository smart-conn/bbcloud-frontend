var data = {
  administrators: [
    {id: 0, name: 'hugo', roleId: 0},
    {id: 1, name: 'admin', roleId: 1}
  ],
  roles: [
    {id: 0, name: '管理员'},
    {id: 1, name: '客服'}
  ],
  permissions: [
    {id: 0, name: '管理厂商'},
    {id: 1, name: '管理管理员'}
  ],
  manufacturers: [
    {id: 0, name: '幼米科技', status: 'passed'},
    {id: 1, name: 'BBCloud 自营', status: 'failed'},
    {id: 2, name: '第一科室', status: 'pending'}
  ]
};

var restServer = new FakeRest.Server();
restServer.toggleLogging();
restServer.init(data);

sinon.FakeXMLHttpRequest.useFilters = true;
sinon.FakeXMLHttpRequest.addFilter(function(method, url) {
  // Do not catch webpack sync, config.js transformation but catch /upload in test env
  return url.indexOf('views/') !== -1 ||
    url.indexOf('/auth/') !== -1;
});

var server = sinon.fakeServer.create();
server.autoRespond = true;
server.autoRespondAfter = 0; // answer immediately
server.respondWith(restServer.getHandler());
