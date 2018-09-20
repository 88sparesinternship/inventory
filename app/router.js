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
<<<<<<< HEAD
    this.route('borrow');
  });
=======
  });
  this.route('barang', function() {});
>>>>>>> 2af68276764a7d42cb52b256c304a4c856753e1b
});

export default Router;
