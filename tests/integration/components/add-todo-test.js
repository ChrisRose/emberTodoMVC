import { moduleForComponent, test } from 'ember-qunit';
import sinon from 'sinon';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('add-todo', 'Integration | Component | add todo', {
  integration: true
});

test('should trigger onAdd on form submit and pass the input value', function(assert) {
  this.set('addTodo', (actual) => {
    let expected = 'Buy milk';
    assert.equal(actual, expected, 'submitted value is passed to external action');
  });
  this.render(hbs`{{add-todo onAdd=(action addTodo)}}`);
  this.$('input').val('Buy milk');
  this.$('input').change();
  this.$('input').submit();
});

test('should not trigger onAdd on form submit if the input value is invalid', function(assert) {
  let spy = sinon.spy();
  this.set('addTodo', spy);
  this.render(hbs`{{add-todo onAdd=(action addTodo)}}`);
  this.$('input').val('');
  this.$('input').change();
  this.$('input').submit();
  assert.ok(spy.notCalled);
});

test('should clear and focus the input after submit', function(assert) {
  this.set('addTodo', () => {});
  this.render(hbs`{{add-todo onAdd=(action addTodo)}}`);
  this.$('input').val('Buy milk');
  this.$('input').change();
  this.$('input').submit();
  assert.equal(this.$('input').val(), '', 'clears the input');
  assert.deepEqual(document.activeElement, this.$('input')[0], 'focuses the input');
});
