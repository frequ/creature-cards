define(["marionette","app","router","tpl!../../templates/creature-edit-view.tpl","models/creatureModel"], function(Marionette,App,Router,CreatureEditViewTemplate,CreatureModel) {

    var CreatureEditView = Marionette.ItemView.extend({
        template: CreatureEditViewTemplate,

        events: {
            'click #save-creature-button': 'onSaveCreatureClicked',
            'click #delete-creature-button': 'onDeleteCreatureClicked',
            'click #back-button' : 'onBackButtonClicked'
        },

        onSaveCreatureClicked: function() {

            if(this.model === undefined) {

                var creature = new CreatureModel({
                    name: $('input#creatureInputName').val(),
                    element: $('select#creatureInputElement').val(),
                    img: $('input#creatureInputImageURL').val(),
                    attack: $('input#creatureInputAttack').val(),
                    defense: $('input#creatureInputDefense').val()
                });
                creature.save(null,{
                    dataType: "text",
                    success: function(){
                        App.router.navigate('', true);
                    }
                });

            }else{

                this.model.set({
                    name: $('input#creatureInputName').val(),
                    element: $('select#creatureInputElement').val(),
                    img: $('input#creatureInputImageURL').val(),
                    attack: $('input#creatureInputAttack').val(),
                    defense: $('input#creatureInputDefense').val()
                });

                this.model.save(null, {
                    success: function(){
                        App.router.navigate('', true);
                    }
                });
            }
            return false;
        },

        onDeleteCreatureClicked: function(){
            this.model.destroy({
                success:function(){
                    App.router.navigate('/', true);
                }
            });
            return false;
        },

        onBackButtonClicked: function(){
            App.router.navigate('/',true);
            return false;
        }
    });
    return CreatureEditView;


});