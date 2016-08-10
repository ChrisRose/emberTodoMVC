import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('todo-item', 'Integration | Component | todo item', {
  integration: true
});

test('should set the todo element`s class to `editing` when it`s double-clicked', function(assert) {
  this.render(hbs`{{todo-item}}`);
  let todoItem = this.$('li');
  this.$('label').dblclick();
  assert.equal(todoItem.hasClass('editing'), true, 'todo has class `editing`');
});

test('should trigger removeTodo when the remove button is clicked', function(assert) {
  this.set('todo', {
    text: 'Buy milk',
    isCompleted: false
  });
  this.set('removeTodo', (actual) => {
    assert.deepEqual(this.get('todo'), actual, 'todo is passed to external action');
  });
  this.render(hbs`{{todo-item model=todo onRemove=(action removeTodo)}}`);
  this.$('.destroy').click();
});

test('should trigger saveTodo when the input loses focus', function(assert) {
  this.set('todo', {
    text: '',
    isCompleted: false
  });
  this.set('saveTodo', (actual) => {
    assert.deepEqual(this.get('todo'), actual, 'passes todo as an argument');
  });
  this.render(hbs`{{todo-item model=todo onSave=(action saveTodo)}}`);
  let todoItem = this.$('li');
  this.$('label').dblclick();
  this.$('.edit').val('Walk Fido');
  this.$('.edit').focusout();
  assert.equal(todoItem.hasClass('editing'), false, 'removes the `editing` class');
});

test('should trigger toggleTodo when the input is toggled', function(assert) {
  this.set('todo', {
    text: 'Buy milk',
    isCompleted: false
  });
  this.set('toggleTodo', (actual) => {
    assert.deepEqual(this.get('todo'), actual, 'todo is passed to external action');
  });
  this.render(hbs`{{todo-item model=todo onToggle=(action toggleTodo)}}`);
  this.$('.toggle').click();
});
