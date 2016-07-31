import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addTodo(text) {
      this.get('todos').pushObject(Ember.Object.create({ text: text, isCompleted: false }));
    },
    toggleTodo(todo) {
      todo.toggleProperty('isCompleted');
    }
  }
});
