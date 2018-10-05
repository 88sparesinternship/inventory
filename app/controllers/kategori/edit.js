import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
export default Controller.extend({
    KategoriService : service(),
    actions : {
        updateKategori(item){
            // this.get('karyawanService').updateKaryawan(item),
            this.get('KategoriService').updateKategori(item),
            this.transitionToRoute('kategori.index')
        },
        cancel(){
            this.transitionToRoute('kategori.index');
        }
    }
});
