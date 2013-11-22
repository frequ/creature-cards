define(["marionette","views/creatureView"], function(Marionette,CreatureView) {

    var CreatureListView = Marionette.CollectionView.extend({
        itemView: CreatureView,
        className: 'creature-list'
    });

    return CreatureListView;

});