import DS from 'ember-data';

export default DS.Model.extend({
    name        : DS.attr('string'),
    value	    : DS.attr('string'),
    created     : DS.attr('string',{
        defaultValue: function(){
            return new Date();
        }
<<<<<<< HEAD
    })    
=======
    }),
    updated     : DS.attr('string',{
        defaultValue: function(){
            return new Date();
        }
    })  
>>>>>>> 2af68276764a7d42cb52b256c304a4c856753e1b
});
