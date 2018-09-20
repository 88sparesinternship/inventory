import Controller from '@ember/controller';

export default Controller.extend({
    actions : {
        editUser: function(id){
            var self = this;

            var name = this.get('model.name');
            var value = this.get('model.value');
<<<<<<< HEAD
=======
            var updated = this.get('model.created');
>>>>>>> 2af68276764a7d42cb52b256c304a4c856753e1b
            
            this.store.findRecord('user', id ).then(function(edit){
                edit.set('name',name);
                edit.set('value',value);
<<<<<<< HEAD

                edit.save();

                self.transitionTo('user.add');
=======
                edit.set('updated', new Date(updated));

                edit.save();

                self.transitionToRoute('user.add');
>>>>>>> 2af68276764a7d42cb52b256c304a4c856753e1b
            })
        }
    }
});
