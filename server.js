var express = require('express'),
    creatures = require('./routes/creatures'),
    path = require('path');

var app = express();

app.configure(function () {
    app.use(express.bodyParser());
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
        res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
        next();
    });
    //app.use(express.static(path.join(__dirname, 'app')));
    app.use(express.static(path.join(__dirname, 'app/build')));
});

app.get('/creatures', creatures.findAll);
app.get('/creatures/:id', creatures.findById);
app.post('/creatures', creatures.addCreature);
app.put('/creatures/:id', creatures.updateCreature);
app.delete('/creatures/:id', creatures.deleteCreature);

app.listen(9999);
console.log('Listening on port 9999...');