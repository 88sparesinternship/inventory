import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | peminjaman/inputPeminjaman', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:peminjaman/input-peminjaman');
    assert.ok(route);
  });
});
