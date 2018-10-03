import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    kategoriService : service(),
    init(){
        this._super(...arguments)
        this.set('kategori',{});
    },
    actions : {
        addKategori(kategori){
            this.get('kategoriService').addKategori(kategori).then(res => res)
            this.set("kategori",{})
        },
        hapusKategori(kategori){
            this.get("kategoriService").hapusKategori(kategori)

        }
    }
});
