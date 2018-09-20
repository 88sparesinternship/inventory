import DS from 'ember-data';

export default DS.Model.extend({
    nama_barang : DS.attr('string'),
    stok : DS.attr('number'),
    created : DS.attr('date'),
    deleted : DS.attr('date'),
    updated : DS.attr('date'),
});
