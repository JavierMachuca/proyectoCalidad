var mongoose = require('mongoose'),
Schema   = mongoose.Schema;
var Estado = mongoose.model('Estado');
var User = mongoose.model('User');

/*var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};*/


//Post, inserta una nueva persona en la bd
module.exports.estado = function(req, res) {  
	console.log('POST');
	console.log(req.body); 
	

	/*var estado = new Estado();
	  estado.temperatura = req.body.temperatura;
	  estado.pulso = req.body.pulso;
	  estado.ubicacion = req.body.ubicacion;
	  estado.date = req.body.date;
	  estado.user = req.body.user*/	
	  var estado = new Estado({
		temperatura: req.body.temperatura,
		pulso: req.body.pulso,
		ubicacion: req.body.ubicacion,
		date: req.body.date,
		user: req.body.user
	});

    estado.save(function(err, estado) {
			Estado.find({}, function(err, estados) {
        User.populate(estados, {path: "user"},function(err, estados){
            res.status(200).send(estados);
        }); 
    });
    });
    /*estado.save(function(err, estado) {
				res.status(200).jsonp(estado);
				/*Estado.populate(persona, {path: "estado"},function(err, persona){
            res.status(200).send(persona);
        });*/
  };

	

