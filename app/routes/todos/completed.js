import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      allTodos: this.get('store').findAll('todo'),
      completedTodos: this.get('store').filter('todo', function(todo) {
        return todo.get('isCompleted');
      })
    });
  }
});
