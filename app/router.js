import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  
  this.route('barang', function() {
    this.route('pinjam');
    this.route('inputpinjam');
    this.route('edit',{path: '/edit/:barang_id'});
  });

  this.route('karyawan', function() {
    this.route('addkaryawan');
    this.route('edit',{path: '/edit/:karyawan_id'});
  });

<<<<<<< HEAD
  this.route('kategori', function() {
    this.route('index');
  });
  this.route('departemen', function() {});
=======
>>>>>>> 0b9a6f0a107c60ccae1db04faf79ddb09787dc17
});

export default Router;
