import Controller from '@ember/controller';

export default Controller.extend({
    actions : {
        editUser: function(id){
            var self = this;

            var name = this.get('model.name');
            var value = this.get('model.value');
            
            this.store.findRecord('user', id ).then(function(edit){
                edit.set('name',name);
                edit.set('value',value);

                edit.save();

                self.transitionTo('user.add');
            })
        }
    }
});
