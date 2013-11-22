define(["backbone"], function(Backbone) {

    var CreatureModel = Backbone.Model.extend({
        urlRoot: '/creatures',
        idAttribute: '_id',
        defaults: {
            name: "",
            element: "",
            img: "",
            attack: "Default Attack",
            defense: "Default Defense"
        }
    });

    return CreatureModel;

});