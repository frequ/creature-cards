define(["marionette"],function(Marionette){

    var App = new Marionette.Application();

    App.addRegions({
        mainRegion: "#content"
    });

    return App;
});