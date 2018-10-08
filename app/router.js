import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
<<<<<<< HEAD
  this.route('user', function() {
    this.route('add');
    this.route('borrow');
    this.route('edit');
  });
  this.route('barang', function() {
    this.route('index');
  	this.route('pinjam');
  	this.route('inputpinjam', {path : '/inputpinjam/:barang_id'});
=======
  
  this.route('barang', function() {
    this.route('pinjam');
    this.route('inputpinjam');
    this.route('edit',{path: '/edit/:barang_id'});
>>>>>>> 3b4e68e4e6b1e41041521324e448136c7efc8d6d
  });

  this.route('karyawan', function() {
    this.route('addkaryawan');
    this.route('edit',{path: '/edit/:karyawan_id'});
  });

  this.route('kategori', function() {
    this.route('index');
  });
<<<<<<< HEAD
=======
  this.route('departemen', function() {});
>>>>>>> 3b4e68e4e6b1e41041521324e448136c7efc8d6d
});

export default Router;
