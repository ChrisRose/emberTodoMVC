import Ember from 'ember';

const todos = [];

export default Ember.Route.extend({
  model() {
    return todos;
  }
});
