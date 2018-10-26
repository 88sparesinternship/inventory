import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import RSVP from 'rsvp';
export default Route.extend({
    // barangService : service(),
    // model(){
    //     //di dalam get = nama service kemudian .method 
    //     return this.get('barangService').ambilBarang().then(res => res)
    // }
    barangService : service(),
    store : service(),
    model(){
        //di dalam get = nama service kemudian .method 
        // this.get('karyawanService').lihatKaryawan().then(res => res)
    return RSVP.hash({
        departemen : this.get('store').findAll('departemen').then(res => res),
        barang : this.get('barangService').ambilBarang().then(res => res),
        kategori : this.get('store').findAll('kategori').then(res => res)

    })
    },

    setupController(controller, model){
        controller.set('kategoris', model.kategori)
        controller.set('departemens',model.departemen)
        controller.set('barangs',model.barang)
    }
});
