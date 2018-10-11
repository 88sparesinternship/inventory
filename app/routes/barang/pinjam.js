import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({
	store : service(),
	model(){
        return RSVP.hash({
            //di dalam get = nama service kemudian .method
            barang : this.store.findAll('barang')
        })
    }
});
