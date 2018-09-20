import Controller from '@ember/controller';

export default Controller.extend({
    init(){
        this._super(...arguments)
        this.set('user',{});
    },
    actions: {
        addNewUser({name,value}){
            let newUser = this.store.createRecord('user',{
                name        : name,
                value       : value
            })
            newUser.save(),
            this.set('user',{})
        },
        
        deleteUser(item){
            this.store.findRecord('user', item.id , { backgroundReload: false }).then(function(del) {
                del.deleteRecord();
                del.get('isDeleted');
                del.save();
            });
        },
    }
});
