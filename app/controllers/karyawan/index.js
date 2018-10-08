import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    karyawanService : service(),
    init(){
        this._super(...arguments)
        this.set('karyawan',{});
    },
    actions :{
        addKaryawan(karyawan){
            this.get('karyawanService').addKaryawan(karyawan),
            this.set('karyawan',{})
        },
        deleteKaryawan(karyawan){
            this.get('karyawanService').deleteKaryawan(karyawan)
        },
        updateKaryawan(){
            this.transitionToRoute('karyawan.edit')
        }

    }
});
