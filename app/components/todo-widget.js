import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  filteredTodos: Ember.computed('todos.@each.isCompleted', function() {
    let todos = this.get('todos');
    let filter = this.get('filter');
    if (filter === 'completed') {
      return todos.filterBy('isCompleted', true);
    } else if (filter ==='active') {
      return todos.filterBy('isCompleted', false);
    } else {
      return todos;
    }
  }),

  incompleteCount: Ember.computed('todos.@each.isCompleted', function() {
    let todos = this.get('todos');
    return todos.filterBy('isCompleted', false).length;
  }),

  isCompleted: Ember.computed('todos.@each.isCompleted', function() {
    let todos = this.get('todos');
    return todos.filterBy('isCompleted', true);
  }),

  allCompleted: Ember.computed('todos.@each.isCompleted', function(key, value) {
    let todos = this.get('todos');
    if (value === undefined) {
      return todos && todos.isEvery('isCompleted');
    } else {
      todos.setEach('isCompleted', value);
      todos.save();
      return value;
    }
  }),

  actions: {
    addTodo(text) {
      let todo = this.get('store').createRecord('todo', {
        text: text,
        isCompleted: false
      });
      todo.save();
    },

    clearCompleted() {
      let todos = this.get('todos');
      let completedTodos = todos.filterBy('isCompleted', true);
      completedTodos.invoke('deleteRecord');
      completedTodos.invoke('save');
    },

    removeTodo(todo) {
      todo.destroyRecord();
    },

    saveTodo(todo) {
      todo.save();
    },

    toggleTodo(todo) {
      todo.toggleProperty('isCompleted');
      todo.save();
    },

    toggleTodos(value) {
      let todos = this.get('todos');
      todos.setEach('isCompleted', value);
      todos.save();
    }
  }
});
