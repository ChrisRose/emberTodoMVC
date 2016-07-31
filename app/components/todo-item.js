import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleTodo() {
      const todo = this.get('model');
      this.get('onClick')(todo);
    }
  }
});
