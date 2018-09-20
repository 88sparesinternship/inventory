import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | barang/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:barang/index');
    assert.ok(route);
  });
});
