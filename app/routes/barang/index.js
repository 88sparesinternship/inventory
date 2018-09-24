import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
    barangService : service(),
    //di dalam get = namaa service kemudian .method
    model(){
        return this.get('barangService').ambilBarang().then(res => res)
    }
});
