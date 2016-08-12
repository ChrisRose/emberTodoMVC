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
    },

    cancelEdit(text, event) {
      const ESCAPE_KEY = 27;
      if (event.keyCode === ESCAPE_KEY) {
        const todo = this.get('model');
        todo.rollbackAttributes();
        this.set('editMode', false);
      }
    }
  },

  didRender() {
    this._super(...arguments);
    this.$('.edit').focus();
  }
});
