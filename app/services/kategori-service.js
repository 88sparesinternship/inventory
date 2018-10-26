import Service,{inject as service} from '@ember/service';

export default Service.extend({
    store : service(),
    lihatKategori(id){
        if(id){
            return this.get('store').findRecord('kategori', id)
        }
        // this.get('store').query('barang',{filter : {deleted : null}}).then(res => {console.log(res)});
        // return this.get('store').query('barang', {filter: {nama_barang: 'laptop' }})
        return this.get('store').query('kategori', { orderBy: 'deleted', equalTo: null})
    },
    addKategori(kategori){
        // let tambahKategori = this.get('store').createRecord('kategori',{
        //     nama_kategori : kategori.nama_kategori 
        // })
        // return tambahKategori.save();
        this.get('store').findAll('kategori', {orderBy : 'kode_kategori'}).then(res =>{
            
            let terbesar = res.get('lastObject')
            let newCode;
            // console.log(terbesar)
 
            if(terbesar){
                newCode = parseInt(terbesar.get('kode_kategori') + 1)
            }
            else{
                newCode = 1
            }
 
            let newKategori = this.get('store').createRecord('kategori',{
                nama_kategori        : kategori.nama_kategori,
                kode_kategori        : newCode
            })
            // console.log(newId)
            return newKategori.save()
        })
    
    },
    hapusKategori(id){
        // let delkategori = this.get('store').createRecord('kategori',{
        //     deleted : "Terhapus",
        // })
        this.get('store').findRecord('kategori', id).then(function(del){
            del.set('deleted' , "Terhapus");
            del.save()
        })
        // return delkategori.save();
    },
    updateKategori(id){
        this.get('store').findRecord('kategori',id).then(function(edit){
            edit.save()
        })
    }
});
