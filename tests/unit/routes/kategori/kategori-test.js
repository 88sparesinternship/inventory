import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | kategori/kategori', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:kategori/kategori');
    assert.ok(route);
  });
});
