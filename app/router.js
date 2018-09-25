import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('user', function() {});
  this.route('barang', function() {
  	this.route('pinjam');
  	this.route('inputpinjam');
  });

  this.route('karyawan', function() {
    this.route('addkaryawan');
  });
});

export default Router;
