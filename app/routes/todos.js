import Ember from 'ember';

var todos = [
  Ember.Object.create({
    text: 'Todo 1',
    isCompleted: false
  }),
  Ember.Object.create({
    text: 'Todo 2',
    isCompleted: false
  })
];

export default Ember.Route.extend({
  model() {
    return todos;
  }
});
