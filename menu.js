function menuConfig(nga, admin) {
  return nga.menu()
    .addChild(nga.menu()
      .title('系统管理')
      .addChild(nga.menu()
        .title('管理员账户')
        .icon('<i class="fa fa-users fa-fw"></i>')
        .link('/administrators/list')
      )
      .addChild(nga.menu()
        .title('角色')
        .icon('<i class="fa fa-link fa-fw"></i>')
        .link('/roles/list')
      )
      .addChild(nga.menu()
        .title('权限')
        .icon('<i class="fa fa-balance-scale fa-fw"></i>')
        .link('/permissions/list')
      )
    )
    .addChild(nga.menu()
      .title('厂商管理')
      .icon('<i class="fa fa-industry fa-fw"></i>')
      .link('/manufacturers/list')
    );
}
