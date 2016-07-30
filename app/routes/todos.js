import Ember from 'ember';

var todos = [
    {
      text: 'Todo 1',
      isCompleted: true
    },
    {
      text: 'Todo 2',
      isCompleted: false
    }
]

export default Ember.Route.extend({
  model() {
    return todos;
  }
});
