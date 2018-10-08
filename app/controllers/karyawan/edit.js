import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    karyawanService : service(),
    actions : {
        updateKaryawan(item){
            // this.get('karyawanService').updateKaryawan(item),
            this.get('karyawanService').updateKaryawan(item),
            this.transitionToRoute('karyawan.index')
        },
        cancel(){
            this.transitionToRoute('karyawan.index');
        }
    }
});
