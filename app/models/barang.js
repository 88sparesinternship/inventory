import DS from 'ember-data';

export default DS.Model.extend({
    nama_barang : DS.attr('string'),
    stok : DS.attr('number'),
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

});
