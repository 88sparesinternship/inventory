import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
    barangService : service(),
    model(){
        //di dalam get = nama service kemudian .method 
        return this.get('barangService').ambilBarang().then(res => res)
    }
});
