import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | karyawan/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:karyawan/edit');
    assert.ok(route);
  });
});
