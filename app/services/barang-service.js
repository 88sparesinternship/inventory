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
            deleted            : null
        })
        return newBarang.save()
        
    },
    deleteBarang(item){
        this.get('store').findRecord('barang', item.id ).then(function(del) {
            del.set('deleted', new Date());
            del.save();
        });
    },

    updateBarang(item){
        var nama_barang = this.get('barang.nama_barang');
        var stok = this.get('barang.stok');

        this.get('store').findRecord('barang' ,item.id).then(function(edit) {
            edit.set('nama_barang',nama_barang);
            edit.set('stok', stok);

            edit.save();
        })
    },
    addKategori(kategori){
        let tambahkategori = this.get('store').createRecord('kategori',{
            kode_kategori        : kategori.kode_kategori,
            nama_kategori        : kategori.nama_kategori
        })
        return tambahkategori.save()

});
