import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
export default Controller.extend({
    barangService : service(),
    init(){
        this._super(...arguments)
        this.set('karyawan',{});
    },
    actions :{
        addKaryawan(karyawan){
            this.get('barangService').addKaryawan(karyawan).then(res => res),
            this.set('karyawan',{})
        },
        deleteKaryawan(karyawan){
            this.get('barangService').deleteKaryawan(karyawan)
            
        }
    }
});
