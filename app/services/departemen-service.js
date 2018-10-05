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
        let tambahDepartemen = this.get('store').createRecord('departemen',{
            nama_departemen : departemen.nama_departemen 
        })
        return tambahDepartemen.save();
    },
    hapusDepartemen(id){
        
        this.get('store').findRecord('departemen', id).then(function(del){
            del.set('deleted' , "Terhapus");
            del.save()
        })
        
    }
});
