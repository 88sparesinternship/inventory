import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('user', function() {
    this.route('add');
    this.route('borrow');
    this.route('edit');
  });
  this.route('barang', function() {
    this.route('index');
  	this.route('pinjam');
  	this.route('inputpinjam', {path : '/inputpinjam/:barang_id'});
  });

  this.route('karyawan', function() {
    this.route('addkaryawan');
  });
});

export default Router;
