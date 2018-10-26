import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    selected : null,
    selectedkat : null,
    barangService : service(),
    init(){
        this._super(...arguments)
        this.set('barang', {});
    },
    actions : {
        selected: function(selected) {
            console.log(selected)
            this.set('barang.nama_departemen', selected)
            
            console.log(this.get('selected'))
        },
        selectedkat: function(selected) {
            console.log(selected)
        
            this.set('barang.nama_kategori',selected)
            console.log(this.get('selectedkat'))
        },
        addBarang(barang){
            this.get('barangService').addBarang(barang)
            this.set('barang', {})
        },
        deleteBarang(item){
            this.get('barangService').deleteBarang(item)
        },
        updateBarang(){
            this.transitionToRoute('barang.edit');

        }
    }
});
