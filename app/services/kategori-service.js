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
        let tambahKategori = this.get('store').createRecord('kategori',{
            nama_kategori : kategori.nama_kategori 
        })
        return tambahKategori.save();
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
    }
});
