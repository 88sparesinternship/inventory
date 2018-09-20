import DS from 'ember-data';

export default DS.Model.extend({
    name        : DS.attr('string'),
    value	    : DS.attr('string'),
    created     : DS.attr('string',{
        defaultValue: function(){
            return new Date();
        }
    }),
    updated     : DS.attr('string',{
        defaultValue: function(){
            return new Date();
        }
    })  
});
