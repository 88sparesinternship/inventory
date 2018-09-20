import Service,{inject as service} from '@ember/service';

export default Service.extend({
    store : service(),
    ambilBarang(id){
        if(id){
            return this.get('store').findRecord('barang', id)
        }
        return this.get('store').findAll('barang')
    },
    addBarang(barang){
            let newBarang = this.get('store').createRecord('barang',{
                nama_barang        : barang.nama_barang,
                stok               : barang.stok,
            })
            return newBarang.save()
        },
});
