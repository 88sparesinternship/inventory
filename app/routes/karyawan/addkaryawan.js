import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
    karyawanService : service(),
    model(){
        return this.get('karyawanService').lihatKaryawan().then(res => res)
    }
});
