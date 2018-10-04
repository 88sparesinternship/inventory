import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('user', function() {});
  this.route('barang', function() {});

  this.route('karyawan', function() {
    this.route('addkaryawan');
  });

  this.route('kategori', function() {
    this.route('index');
  });
  this.route('departemen', function() {});
});

export default Router;
