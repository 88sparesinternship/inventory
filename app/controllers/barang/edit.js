import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    barangService : service(),
    actions : {
        updateBarang(item){
            // var nama_barang = this.get('model.nama_barang');
            // var stok = this.get('model.stok');
            this.get('barangService').updateBarang(item),
            this.transitionToRoute('barang.index')
        },
        cancel(){
            this.transitionToRoute('barang.index');
        }
    }
});
