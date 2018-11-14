import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('barang', function() {
    this.route('edit',{path: '/edit/:barang_id'});
    this.route('laporanBarang');
  });

  this.route('karyawan', function() {
    this.route('addkaryawan');
    this.route('edit',{path: '/edit/:karyawan_id'});
  });

  this.route('kategori', function() {
    this.route('edit',{path: '/edit/:kategori_id'});
  });
  this.route('departemen', function() {
    this.route('edit', {path : '/edit/:departemen_id'});
  });
  this.route('pengembalian', function() {});

  this.route('data', function() {
    this.route('formData');
  });
  this.route('peminjaman', function() {
    this.route('inputPeminjaman', {path : '/inputPeminjaman/:peminjaman_id'});
  });
});

export default Router;
