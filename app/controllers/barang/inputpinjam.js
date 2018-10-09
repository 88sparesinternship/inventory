import Controller from '@ember/controller';
// import {inject as service} from '@ember/service';

export default Controller.extend({
	actions: {
		addPinjam: function(id){
			

			this.store.findRecord('barang', id).then(function(edit){
				edit.save();
			})
			this.transitionToRoute('barang.pinjam');

		}	
	}
});
