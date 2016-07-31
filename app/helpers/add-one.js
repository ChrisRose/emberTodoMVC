import Ember from 'ember';

export function addOne(params/*, hash*/) {
  return params[0] + 1;
}

export default Ember.Helper.helper(addOne);
