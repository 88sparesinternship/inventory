import Service,{inject as service} from '@ember/service';

export default Service.extend({
    store : service(),
    ambilBarang(id){
        if(id){
            return this.get('store').findRecord('barang', id)
        }
        // this.get('store').query('barang',{filter : {deleted : null}}).then(res => {console.log(res)});
        // return this.get('store').query('barang', {filter: {nama_barang: 'laptop' }})
        return this.get('store').query('barang', { orderBy: 'deleted', equalTo: null})
    },
    addBarang(barang){
        let newBarang = this.get('store').createRecord('barang',{
            nama_barang        : barang.nama_barang,
            stok               : barang.stok,
            deleted            : null,
            updated            : null
        })
        return newBarang.save()
        
    },
    deleteBarang(item){
        this.get('store').findRecord('barang', item.id ).then(function(del) {
            del.set('deleted', new Date());
            del.save();
        });
    },
    
    updateBarang(id){
        this.get('store').findRecord('barang' , id ).then(function(edit) {
            edit.set('updated', new Date());

            edit.save();
        })
    },
    cancel(){
        this.get('store').rollbackAttributes()
    }

});
