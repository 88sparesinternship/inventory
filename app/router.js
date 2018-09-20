import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('user', function() {
    this.route('add');
    this.route('edit',{path: '/edit/:user_id'});
  });
  this.route('barang', function() {});
});

export default Router;
