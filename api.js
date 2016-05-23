var data = {
  administrators: [
    {id: 0, name: 'hugo', roleId: 0},
    {id: 1, name: 'admin', roleId: 1}
  ],
  roles: [
    {id: 0, name: '管理员', permissionIds: [1, 2]},
    {id: 1, name: '客服', permissionIds: [3, 4]}
  ],
  permissions: [
    {id: 1, name: '新增管理员', code: 'admin:create'},
    {id: 2, name: '编辑管理员', code: 'admin:edit'},
    {id: 3, name: '删除管理员', code: 'admin:delete'},
    {id: 4, name: '查看管理员', code: 'admin:list'}
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
