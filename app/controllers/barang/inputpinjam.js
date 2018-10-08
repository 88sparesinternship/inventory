import Controller from '@ember/controller';
// import {inject as service} from '@ember/service';

export default Controller.extend({
<<<<<<< HEAD
	// barangService : service(),
	// actions: {
	// 	addPinjam(id){
	// 		this.get('barangService').addPinjam(id)
	// 	}	
	// }
=======
	actions: {
		addPinjam: function(id){
			

			this.store.findRecord('barang', id).then(function(edit){
				edit.save();
			})
			this.transitionToRoute('barang.pinjam');

		}	
	}
>>>>>>> 3b4e68e4e6b1e41041521324e448136c7efc8d6d
});
