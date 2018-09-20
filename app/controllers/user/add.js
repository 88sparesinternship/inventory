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
<<<<<<< HEAD
                // del.get('isDeleted');
=======
                del.get('isDeleted');
>>>>>>> 2af68276764a7d42cb52b256c304a4c856753e1b
                del.save();
            });
        },
    }
});
