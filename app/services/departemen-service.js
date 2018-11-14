import Service,{inject as service} from '@ember/service';

export default Service.extend({
    store : service(),
    lihatDepartemen(id){
        if(id){
            return this.get('store').findRecord('departemen', id)
        }
        // this.get('store').query('barang',{filter : {deleted : null}}).then(res => {console.log(res)});
        // return this.get('store').query('barang', {filter: {nama_barang: 'laptop' }})
        return this.get('store').query('departemen', { orderBy: 'deleted', equalTo: null})
    },
    addDepartemen(departemen){
        this.get('store').findAll('departemen' , {orderBy : 'kode_departemen'}).then(res => {
            let terbesar = res.get('lastObject')
            let newCode;

            if(terbesar){
                newCode = parseInt(terbesar.get('kode_departemen') + 1 )
            }
            else{
                newCode = 1
            }

            let tambahDepartemen = this.get('store').createRecord('departemen',{
                nama_departemen : departemen.nama_departemen ,
                kode_departemen : newCode
            })
            return tambahDepartemen.save();
        })
    },
    hapusDepartemen(id){
        this.get('store').findRecord('departemen', id).then(function(del){
            del.set('deleted' , "Terhapus");
            del.save()
        })
        
    },
    updateDepartemen(id){
        this.get('store').findRecord('departemen', id).then(function(edit){
            edit.save()
        })
    }
});
