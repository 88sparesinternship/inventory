import Controller from '@ember/controller';

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
