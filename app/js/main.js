require.config({
    paths: {
        "jquery": "lib/jquery/jquery",
        "underscore": "lib/underscore/underscore",
        "backbone": "lib/backbone/backbone",
        "marionette": "lib/marionette/lib/backbone.marionette",
        "tpl": "lib/requirejs-tpl/tpl",
        "backbone.wreqr": "lib/backbone.wreqr/lib/backbone.wreqr"
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Marionette'
        }
    }
});

require(["jquery", "underscore", "backbone", 'app', 'router'],
    function (jQuery, _, Backbone, App, AppRouter) {

        /* testing modules are correctly loaded
        console.log("Test output");
        console.log("$: " + typeof jQuery);
        console.log("_: " + typeof _);
        console.log("Backbone: " + typeof Backbone); */

        App.addInitializer(function(options) {
            App.router = new AppRouter(options);
            Backbone.history.start();
        });

        App.start();
        return App;

    }
);
