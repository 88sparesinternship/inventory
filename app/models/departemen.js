import DS from 'ember-data';

export default DS.Model.extend({
nama_departemen:DS.attr('string'),
kode_departemen:DS.attr('string'),
deleted:DS.attr('string')
});
