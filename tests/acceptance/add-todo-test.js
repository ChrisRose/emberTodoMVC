import { test } from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | add todo');

test('should add a todo', function(assert) {
  visit('/');
  fillIn('input.new-todo', 'Buy milk');
  triggerEvent('form', 'submit');
  andThen(function(){
    shouldHaveElementWithCount(assert, '.todo-list li', 1);
  //   // console.log(find('.todo-list').html());
  //   // const el = findWithAssert('.todo-list li');
  //   // const count = el.length;
  //   // assert.equal(1, count, `found ${count} times`);
  //   assert.equal(find('.todo-list li:first').text().trim(), 'Buy milk');
  });
});

// test('should remove a todo', function(assert) {
//   visit('/');
//   fillIn('input.new-todo', 'Buy milk');
//   triggerEvent('form', 'submit');
//   click('.destroy:first');
//   andThen(function(){
//     assert.equal(find('ul.todo-list li:first').text().trim(), 'Buy milk');
//   });
// });
