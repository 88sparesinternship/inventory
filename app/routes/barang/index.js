import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
// import RSVP from 'rsvp';

export default Route.extend({
    barangService : service(),
    model(){
        return this.get('barangService').ambilBarang().then(res => res)
    }
});
