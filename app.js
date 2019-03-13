const express = require('express');
const serveIndex = require('serve-index');
const formidable = require('formidable');
const fs = require('fs')
const app = express();
const PORT = 3000;

const files = fs.readdirSync('/home/pi/RetroPie/roms/');
//console.log('...File: ', files);

app.use('/file', express.static('../'), serveIndex('../', {'icons': true}));

app.get('/upload', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/listeDeRoms', function(req, res) {
	res.send(files);
});

app.post('/', function (req, res){
    var form = new formidable.IncomingForm();
    form.parse(req);

    form.on('fileBegin', function (name, file){
       // file.path = '/home/pi/RetroPie/roms/nes/' + file.name;
      file.path = '/home/pi/projetNodeJS/uploads/' + file.name;
    });

    form.on('file', function (name, file){
        console.log('Nom du fichier chargé: ' + file.name);
    });

    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, function() {
	console.log('Le serveur Node écoute sur le port: ', PORT);
});
