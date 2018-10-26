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
        this.get('store').findAll('barang', {orderBy : 'kode_barang'}).then(res =>{
            
            let terbesar = res.get('lastObject')
            let newCode;

            if(terbesar){
                newCode = parseInt(terbesar.get('kode_barang') + 1)
            }
            else{
                newCode = 1
            }
 
            let newbarang = this.get('store').createRecord('barang',{
                nama_barang        : barang.nama_barang,
                nama_departemen    : barang.nama_departemen,
                nama_kategori      : barang.nama_kategori,
                kode_barang        : newCode,
                deleted            : null,
                updated            : null,
            })
            // console.log(newId)
            return newbarang.save()
        })
    
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
});
