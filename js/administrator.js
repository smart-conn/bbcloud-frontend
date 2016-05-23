function administratorConfig(nga, admin) {

  var administrator = admin.getEntity('administrators');
  var role = admin.getEntity('roles');

  administrator.listView()
    .title('管理员账户')
    .fields([
      nga.field('name').label('名称'),
      nga.field('roleId', 'reference').label('角色')
        .targetEntity(role)
        .targetField(nga.field('name'))
    ])
    .actions(['batch', 'create'])
    .listActions(['edit', 'delete']);

  administrator.creationView()
    .fields([
      nga.field('name')
    ]);

  administrator.editionView()
    .fields([
      nga.field('name'),
      nga.field('roleId', 'reference').label('角色')
        .targetEntity(role)
        .targetField(nga.field('name'))
    ]);

}
