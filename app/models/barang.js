import DS from 'ember-data';

export default DS.Model.extend({
    kode_barang : DS.attr('string'),
    nama_barang : DS.attr('string'),
<<<<<<< HEAD
    stok : DS.attr('number'),
    created : DS.attr('date', {
    	defaultValue  : function() {
    		return new Date();
    	}
    }),
    deleted : DS.attr('date' ,{
    	defaultValue  : function() {
    		return new Date();
    	}
    }),
    updated : DS.attr('date'),
=======
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

>>>>>>> 3b4e68e4e6b1e41041521324e448136c7efc8d6d
});
