import DS from 'ember-data';

export default DS.Model.extend({
 nama_kategori: DS.attr('string'),
 kode_kategori: DS.attr('string'),
});
