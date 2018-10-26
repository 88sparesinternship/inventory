import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
<<<<<<< HEAD
// import RSVP from 'rsvp';

=======
import RSVP from 'rsvp';
>>>>>>> 66e98ea881a56b3196ba0868ecf817889ca00d80
export default Route.extend({
    // barangService : service(),
    // model(){
    //     //di dalam get = nama service kemudian .method 
    //     return this.get('barangService').ambilBarang().then(res => res)
    // }
    barangService : service(),
<<<<<<< HEAD
    model(){
        return this.get('barangService').ambilBarang().then(res => res)
=======
    store : service(),
    model(params){
        //di dalam get = nama service kemudian .method 
        // this.get('barangService').ambilBarang().then(res => res)
        return RSVP.hash({
            kategori      : this.get('store').findAll('kategori').then(res => res),
            departemen    : this.get('store').findAll('departemen').then(res => res),
            // barang        : this.get('store').findAll('barang', params.id).then(res => res)
            barang        :  this.get('barangService').ambilBarang().then(res => res)
        })
    },
    setupController(controller,model){
        // console.log(model)
        controller.set('barangs', model.barang)
        controller.set('departemens', model.departemen)
        controller.set('kategoris', model.kategori)
>>>>>>> 66e98ea881a56b3196ba0868ecf817889ca00d80
    }
});
