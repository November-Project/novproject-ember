import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    var model = new Ember.Object();
    model.set('reset_token', decodeURIComponent(params.token));
    return model;
  },

  cleanupController: function () {
    this.controller.cleanup();
  }.on('deactivate')
});
