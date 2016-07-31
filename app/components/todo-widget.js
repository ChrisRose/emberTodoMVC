import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  incompleteCount: Ember.computed('todos.@each.isCompleted', function() {
    let todos = this.get('todos');
    return todos.filterBy('isCompleted', false).length;
  }),

  isCompleted: Ember.computed('todos.@each.isCompleted', function() {
    let todos = this.get('todos');
    return todos.filterBy('isCompleted', true);
  }),

  actions: {
    addTodo(text) {
      let todo = this.get('store').createRecord('todo', {
        text: text,
        isCompleted: false
      });
      todo.save();
    },
    toggleTodo(todo) {
      todo.toggleProperty('isCompleted');
      todo.save();
    },
    removeTodo(todo) {
      todo.destroyRecord();
    },
    clearCompleted() {
      let todos = this.get('todos');
      let completedTodos = todos.filterBy('isCompleted', true);
      completedTodos.invoke('deleteRecord');
      completedTodos.invoke('save');
    }
  }
});
