import Service,{inject as service} from '@ember/service';

export default Service.extend({
     store : service(),
    
     lihatKaryawan(id){
        if(id){
            return this.get('store').findRecord('karyawan')
        }
        // this.get('store').query('barang',{filter : {deleted : null}}).then(res => {console.log(res)});
        // return this.get('store').query('barang', {filter: {nama_barang: 'laptop' }})
        return this.get('store').query('karyawan', {orderBy: 'deleted', equalTo: null})
    },
   
                                
    addKaryawan(karyawan){
        // var selectedOption = null; 
        // this.set(selectedOption, selected)
      
        this.get('store').findAll('karyawan', {orderBy : 'kode_karyawan'}).then(res =>{
            let terbesar = res.get('lastObject')
            let newCode;
            
            
            // console.log(terbesar.get('kode_karyawan'))
            if(terbesar){
                newCode = parseInt(terbesar.get('kode_karyawan') + 1)
            }
            else{
                newCode = 1
            }
            let newKaryawan = this.get('store').createRecord('karyawan',{
                nama_karyawan       : karyawan.nama_karyawan,
                kode_karyawan       : newCode,    
                nama_departemen     : karyawan.nama_departemen,
            })
          
            return newKaryawan.save()
        })
    },
    deleteKaryawan(id){
        this.get('store').findRecord('karyawan', id ).then(function(del) {
            del.set('deleted', new Date());
            del.save();
        });
    },
    updateKaryawan(id){
        this.get('store').findRecord('karyawan',id).then(function(edit){
            edit.save()
        })
    }
        
});
