import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({
    barangService : service(),
    store : service(),
    model(params){
        return RSVP.hash({
            barang : this.get('barangService').ambilBarang().then(res => res)
        })
    },
    setupController(controller,model){
        controller.set('barangs', model.barang)
    }
});
