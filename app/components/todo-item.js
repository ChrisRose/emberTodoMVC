import Ember from 'ember';

export default Ember.Component.extend({
  editMode: false,
  actions: {
    editTodo() {
      this.set('editMode', true);
    },
    removeTodo() {
      const todo = this.get('model');
      this.get('onRemove')(todo);
    },
    saveTodo() {
      const todo = this.get('model');
      this.get('onSave')(todo);
      this.set('editMode', false);
    },
    toggleTodo() {
      const todo = this.get('model');
      this.get('onToggle')(todo);
    }
  }
});
