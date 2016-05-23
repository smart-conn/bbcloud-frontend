function administratorConfig(nga, admin) {

  var administrator = admin.getEntity('administrators');
  var role = admin.getEntity('roles');

  administrator.listView()
    .fields([
      nga.field('name'),
      // nga.field('roleId', 'reference')
      //   .targetEntity(role)
      //   .targetField(nga.field('name'))
    ])
    .actions(['batch', 'create'])
    .listActions(['edit', 'delete']);

  administrator.creationView()
    .fields([
      nga.field('name')
    ]);

  administrator.editionView()
    .fields([
      nga.field('name')
    ]);

}
