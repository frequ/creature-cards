define(["backbone","models/creatureModel"], function(Backbone,CreatureModel) {

    var CreatureCollection = Backbone.Collection.extend({
        model: CreatureModel,
        url: '/creatures'
    });

    return CreatureCollection;

});
