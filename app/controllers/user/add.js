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
        // yang dibawah boleh dihapus
        // Upper(item){
            // this.store.findRecord('user', item.id , { backgroundReload: false }).then(function(up) {
            //     up.set('user', {name} );
            // })
            // this.store.findRecord('person', 1).then(function(tyrion) {
            //     // ...after the record has loaded
            //     tyrion.set('firstName', 'Yollo');
            // });
        // }
        // editUser(item){
        //     this.store.findRecord('user', item.id).then(function(editkuy) {
        //         editkuy.setProperties({ name: '' , value: '' });
        //     });
        // }
    }
});
