var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/creaturedb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', function callback() {
    console.log('mongoose connection open');
});

var CreatureSchema = mongoose.Schema({
    name: String,
    element: String,
    img: String,
    attack: String,
    defense: String
});

var Creature = mongoose.model('Creature', CreatureSchema);


exports.findAll =  function(req, res) {
    return Creature.find(function(err, creatures) {
        if (!err) {
            return res.send(creatures);
        }else{
            return console.log(err);
        }
    });
};

exports.findById = function(req, res) {
    return Creature.findById(req.params.id, function(err, creature) {
        if (!err) {
            return res.send(creature);
        }else{
            return console.log(err);
        }
    });
};

exports.addCreature = function(req, res) {
    var creature = new Creature({
        name: req.body.name,
        element: req.body.element,
        img: req.body.img,
        attack: req.body.attack,
        defense: req.body.defense
    });
    return creature.save(function (err) {
        if(!err) {
            console.log('creature created');
            return res.send(creature);
        }else{
            return console.log(err);
        }
    });
};

exports.updateCreature = function(req, res) {
    return Creature.findById(req.params.id, function(err, creature) {
        creature.name = req.body.name;
        creature.element = req.body.element;
        creature.img = req.body.img;
        creature.attack = req.body.attack;
        creature.defense = req.body.defense;

        return creature.save(function(err) {
            if(!err) {
                console.log("creature updated");
                return res.send(creature);
            }else{
                console.log(err);
            }
        });
    });
};

exports.deleteCreature = function(req, res) {
    return Creature.findById(req.params.id, function(err, creature) {
        return creature.remove(function(err) {
            if(!err){
                console.log("creature removed");
                return res.send(creature);
            }else{
                console.log(err);
            }
        });
    });
};


/*var koda = new Creature({
    name: "Koda",
    element: "Nature",
    img: "http://talli.sallad.fi/~frequ/koda.jpg",
    attack: 'Body slam',
    defense: 'Puppy eyes stare'
});

koda.save(function (err) {
    if (!err) {
        return console.log("created");
    } else {
        return console.log(err);
    }
}); */




/*

 // Prepopulating database for testing purposes (curl)
 GET ALL
 curl -i -X GET http://localhost:9999/quotes
 POST:
 curl -i -X POST -H 'Content-Type: application/json' -d '{"author": "Albert Einstein", "quote": "Only a life lived for others is a life worthwhile."}' http://localhost:9999/quotes
 UPDATE
 curl -i -X PUT -H 'Content-Type: application/json' -d '{"author": "Albert Einstein", "quote": "Only a life lived for others is a life worthwhile."}' http://localhost:9999/quotes/5069b47aa892630aae000007
 DELETE:
 curl -i -X DELETE http://localhost:9999/quotes/5069b47aa892630aae000007

 var quote1 = new Quote({
 author: "Socrates",
 quote: "Wisdom begins in wonder."
 });

 var quote2 = new Quote({
 author: "Albert Einstein",
 quote: "A person who never made a mistake never tried anything new."
 });

 quote1.save(function (err) {
 if (!err) {
 return console.log("created");
 } else {
 return console.log(err);
 }
 });
 quote2.save(function (err) {
 if (!err) {
 return console.log("created");
 } else {
 return console.log(err);
 }
 });

 */