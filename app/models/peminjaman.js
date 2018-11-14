import DS from 'ember-data';

export default DS.Model.extend({
	nama_barang		: DS.attr('string'),
	nama_kategori : DS.attr('string'),
	nama_departemen : DS.attr('string'),
	nama_karyawan : DS.attr('string'),
	
	kode_barang : DS.attr('number'),
    kode_kategori : DS.attr('number'),
    kode_departemen : DS.attr('number'),
});
