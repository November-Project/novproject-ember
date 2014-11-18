import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.session.user;
  },

  setupController: function (controller, model) {
    this._super(controller, model);
    this.controllerFor("tribes").set("content", this.store.find("tribe"));
  }
});