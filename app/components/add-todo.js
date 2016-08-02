import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      let text = this.get('text');
      if (text === '') {
        return;
      }
      text = text.trim();
      this.get('onAdd')(text);
      this.set('text', '');
      this.$('input').focus();
    }
  }
});
