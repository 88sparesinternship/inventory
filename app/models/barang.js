import DS from 'ember-data';

export default DS.Model.extend({
<<<<<<< HEAD
    kode_barang : DS.attr('string'),
=======
    id_kategoris    : DS.belongsTo('departemen'),
    id_departemens : DS.belongsTo('kategori'),
>>>>>>> 66e98ea881a56b3196ba0868ecf817889ca00d80
    nama_barang : DS.attr('string'),
    created : DS.attr('date',{
        defaultValue : function(){
            return new Date();
        }
    }),
    deleted : DS.attr('string', {
        defaultValue : function(){
            return new Date();
        }
    }),
    updated : DS.attr('date',{
        defaultValue : function(){
            return new Date();
        }
    }),
    kode_barang : DS.attr('number'),
<<<<<<< HEAD
    kode_kategori : DS.attr('number'),
    nama_departemen : DS.attr('string'),
    nama_kategori : DS.attr('string'),
=======
    kode_departemen : DS.attr('number')
>>>>>>> 376d234ffb8a8049a1243066bee09f52538a244f

});
