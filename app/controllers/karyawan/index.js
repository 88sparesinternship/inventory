import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    karyawanService : service(),
    selected : null,
    init(){
        this._super(...arguments)
        this.set('karyawan',{});
    },
    
    actions :{
        selected: function(selected) {
            console.log(selected)
            this.set('karyawan.nama_departemen', selected)
            console.log(this.get('selected'))
        },
        addKaryawan(karyawan){
            console.log(karyawan)
            this.get('karyawanService').addKaryawan(karyawan),
            this.set('karyawan',{})
        },
        deleteKaryawan(karyawan){
            this.get('karyawanService').deleteKaryawan(karyawan)
        },
        updateKaryawan(){
            this.transitionToRoute('karyawan.edit')
        },
    }
});
