function permissionConfig(nga, admin) {

  var permission = admin.getEntity('permissions');

  permission.listView()
    .fields([
      nga.field('name')
    ])
    .actions(['create']);

  permission.creationView()
    .fields([
      nga.field('name')
    ]);

  permission.editionView()
    .fields([
      nga.field('name')
    ]);

}
