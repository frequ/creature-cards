define(["marionette","app","views/creatureEditView","tpl!../../templates/creature-view.tpl"], function(Marionette,App,CreatureEditView,CreatureViewTemplate) {

    var CreatureView = Marionette.ItemView.extend({
        template: CreatureViewTemplate,
        className: 'creature-item',

        events: {
            'click': 'onCreatureClicked'
        },

        onCreatureClicked: function () {
            App.router.navigate('creatures/' + this.model.id, true);
        }

    });

    return CreatureView;

});