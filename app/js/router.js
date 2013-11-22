define(['backbone','views/creatureEditView','views/creatureListView','app','collections/creatureCollection','models/creatureModel'],
    function(Backbone,CreatureEditView,CreatureListView,App,CreatureCollection,CreatureModel) {

    var AppRouter = Backbone.Router.extend({

       routes: {
           "" : "home",
           "creatures/:id" : "editCreature",
           "add" : "editCreature"
         },

        home: function() {
            this.creatureCollection = new CreatureCollection();
            var creatureListView = new CreatureListView({
                collection: this.creatureCollection
            });

            this.creatureCollection.fetch({
                success: function() {
                    App.mainRegion.show(creatureListView);
                }
            });


        },

        editCreature: function(id) {
            if ( this.creatureCollection ) {
                this.creature = this.creatureCollection.get(id);
            }

            this.creatureEditView = new CreatureEditView({model: this.creature});
            App.mainRegion.show(this.creatureEditView);
        }
    });

    return AppRouter;

});