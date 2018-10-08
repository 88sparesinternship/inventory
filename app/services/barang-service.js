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
<<<<<<< HEAD
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
=======
        this.get('store').findAll('barang', {orderBy : 'kode_barang'}).then(res =>{
            let terbesar = res.get('lastObject')
            let newCode;

            (terbesar.get('kode_barang'))
            if(terbesar){
                newCode = parseInt(terbesar.get('kode_barang') + 1)            
            }
            else{
                newCode = 1
            }

            let newBarang = this.get('store').createRecord('barang',{
                nama_barang        : barang.nama_barang,
                stok               : barang.stok,
                deleted            : null,
                updated            : null,
                kode_barang        : newCode
            })
            // console.log(newId)
            return newBarang.save()
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
>>>>>>> 3b4e68e4e6b1e41041521324e448136c7efc8d6d
    },
});
