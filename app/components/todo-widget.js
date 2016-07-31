import Ember from 'ember';

export default Ember.Component.extend({
  isCompleted: Ember.computed('todos.@each.isCompleted', function() {
    var todos = this.get('todos');
    return todos.filterBy('isCompleted', true);
  }),

  actions: {
    addTodo(text) {
      this.get('todos').pushObject(Ember.Object.create({
        text: text,
        isCompleted: false
      }));
    },
    toggleTodo(todo) {
      todo.toggleProperty('isCompleted');
    },
    clearCompleted() {
      let todosCopy = this.get('todos').filter(function (todo) {
        if (todo.isCompleted === false) { return todo };
      });
      this.set('todos', todosCopy);
    }
  }
});
