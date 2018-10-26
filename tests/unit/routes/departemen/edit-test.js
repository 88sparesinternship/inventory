import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | departemen/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:departemen/edit');
    assert.ok(route);
  });
});
