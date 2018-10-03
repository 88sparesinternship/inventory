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

});

export default Router;
