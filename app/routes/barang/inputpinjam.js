import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import { hash } from 'rsvp';

export default Route.extend({
    // barangService : service(),
    store : service(),
    model(params){
        //di dalam get = nama service kemudian .method 
        //return this.get('barangService').lihatKaryawan().then(res => {console.log()})
    

        return hash({
			karyawan : this.get('store').findAll('karyawan').then(res => res),
			barang : this.get('store').findRecord('barang', params.id).then(res => res),
		})
    },
    setupController(controller,model){
    	console.log(model)
    	controller.set('karyawan', model.karyawan);
    	controller.set('barang', model.barang);
    }
});
