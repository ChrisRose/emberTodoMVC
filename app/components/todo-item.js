import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleTodo() {
      const todo = this.get('model');
      this.get('onToggle')(todo);
    },
    removeTodo() {
      const todo = this.get('model');
      this.get('onRemove')(todo);
    }
  }
});
