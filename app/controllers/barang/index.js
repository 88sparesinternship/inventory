import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    barangService : service(),
    init(){
        this._super(...arguments)
        this.set('barang',{});
    },
    actions :{
        addBarang(barang){
            this.get('barangService').addBarang(barang).then(res => res)
        }
    }
});
