import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    
    barangService : service(),
    init(){
        this._super(...arguments)
        this.set('barang', {});
    },
    actions : {
        addBarang(barang){
<<<<<<< HEAD
            this.get('barangService').addBarang(barang).then(res => res),
            this.set('barang', {})
        },
        deleteBarang(item){
            this.get('barangService').deleteBarang(item)
        },
        updateBarang(item){
            this.get('barangService').updateBarang(item)
=======
            this.get('barangService').addBarang(barang).then(res => res)
        },
        deleteBarang(item){
            this.get('barangService').deleteBarang(item)
>>>>>>> 976de373a67bb297030418322605119a7a2cea00
        }
    }
});
