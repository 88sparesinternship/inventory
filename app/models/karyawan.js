import DS from 'ember-data';

export default DS.Model.extend({
    nama_karyawan : DS.attr('string'),
    deleted : DS.attr('string')
});
