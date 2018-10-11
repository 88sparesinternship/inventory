import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({
    store : service(),
    model(){
        return RSVP.hash({
            //di dalam get = nama service kemudian .method 
            departemen  : this.store.findAll('departemen'),
            kategori    : this.store.findAll('kategori'),
            barang      : this.store.findAll('barang'),
        })
    }
});
