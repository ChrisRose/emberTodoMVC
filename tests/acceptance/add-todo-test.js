import { test } from 'qunit';
import '../helpers/should-have-element-with-count';
import moduleForAcceptance from '../helpers/module-for-acceptance';
import shouldHaveElementWithCount from '../helpers/should-have-element-with-count';

moduleForAcceptance('Acceptance | add todo');

test('should add a todo', function(assert) {
  visit('/');
  fillIn('input.new-todo', 'Buy milk');
  triggerEvent('form', 'submit');
  andThen(function(){
    shouldHaveElementWithCount(assert, 'li', '.todo-list', 1);
    assert.equal(find('.todo-list li:first').text().trim(), 'Buy milk');
  });
});

test('should remove a todo', function(assert) {
  visit('/');
  fillIn('input.new-todo', 'Buy milk');
  triggerEvent('form', 'submit');
  click('.destroy:first');
  andThen(function(){
    shouldHaveElementWithCount(assert, 'li', '.todo-list', 0);
  });
});
