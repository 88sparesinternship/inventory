import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    departemenService : service(),
    actions : {
        updateDepartemen(item){
            this.get('departemenService').updateDepartemen(item),
            this.transitionToRoute('departemen.index')
        }
    }
});
