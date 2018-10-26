import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    barangService : service(),
    actions : {
        updateBarang(item){
            this.get('barangService').updateBarang(item),
            this.transitionToRoute('barang.index')
        },
        cancel(){
            this.transitionToRoute('barang.index');
        }
    }
});
