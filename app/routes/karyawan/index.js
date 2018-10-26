import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({
    karyawanService : service(),
    store : service(),
    model(){
        //di dalam get = nama service kemudian .method 
        // this.get('karyawanService').lihatKaryawan().then(res => res)
        return RSVP.hash({
            departemen : this.get('store').findAll('departemen').then(res => res),
            karyawan : this.get('karyawanService').lihatKaryawan().then(res => res)
        })
    },

    setupController(controller, model){
        controller.set('karyawans', model.karyawan)
        controller.set('departemens',model.departemen)
    }
});
