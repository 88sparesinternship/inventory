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
    deleteBarang(item){
            this.get('store').findRecord('barang', item.id , { backgroundReload: false }).then(function(del) {
            del.deleteRecord();
            del.get('isDeleted');
            del.save();
        });
    },
    lihatKaryawan(){
        return this.get('store').findAll('karyawan')
    },
    addKaryawan(karyawan){
        let newKaryawan = this.get('store').createRecord('karyawan', {
            nama_karyawan   : karyawan.nama_karyawan,
        })
        return newKaryawan.save()
    },
    deleteKaryawan(item){
        this.get('store').findRecord('karyawan', item.id , { backgroundReload: false }).then(function(del) {
            del.deleteRecord();
            del.get('isDeleted');
            del.save();
        });
    },
});
