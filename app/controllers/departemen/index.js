import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
export default Controller.extend({
    departemenService : service(),
    init(){
        this._super(...arguments)
        this.set('departemen',{});
    },
    actions : {
        addDepartemen(departemen){
            this.get('departemenService').addDepartemen(departemen),
            this.set('departemen',{})
        },
        hapusDepartemen(departemen){
            this.get("departemenService").hapusDepartemen(departemen)
        }
    }
});
