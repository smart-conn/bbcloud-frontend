function roleConfig(nga, admin) {

  var role = admin.getEntity('roles');

  role.listView()
    .fields([
      nga.field('name')
    ])
    .actions(['create'])
    .listActions(['edit', 'delete']);

  role.creationView()
    .fields([
      nga.field('name')
    ]);

  role.editionView()
    .fields([
      nga.field('name')
    ]);

}
