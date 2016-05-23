function manufacturerConfig(nga, admin) {

  var manufacturer = admin.getEntity('manufacturers');

  manufacturer.listView()
    .fields([
      nga.field('name').label('名称'),
      nga.field('status', 'choice').label('审核状态')
        .choices([
          {label: '审核通过', value: 'passed'},
          {label: '审核失败', value: 'failed'},
          {label: '待审核', value: 'pending'}
        ])
    ])
    .actions([])
    .listActions(['edit', 'delete']);

  manufacturer.creationView()
    .fields([
      nga.field('name').label('名称')
    ]);

  manufacturer.editionView()
    .fields([
      nga.field('name').label('名称'),
      nga.field('status', 'choice').label('审核状态')
        .choices([
          {label: '审核通过', value: 'passed'},
          {label: '审核失败', value: 'failed'},
          {label: '待审核', value: 'pending'}
        ])

    ]);

}
