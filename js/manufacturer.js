function manufacturerConfig(nga, admin) {

  var manufacturer = admin.getEntity('manufacturers');

  manufacturer.listView()
    .fields([
      nga.field('name'),
      nga.field('status')
    ])
    .actions([])
    .listActions(['review', 'delete']);

  manufacturer.creationView()
    .fields([
      nga.field('name')
    ]);

  manufacturer.editionView()
    .fields([
      nga.field('name')
    ]);

}
