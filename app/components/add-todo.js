import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      let text = this.get('text');
      if (text === '') {
        return;
      }
      this.get('onAdd')(text);
      this.set('text', '');
      this.$('input').focus();
    }
  }
});
