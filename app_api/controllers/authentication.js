var passport = require('passport');
var mongoose = require('mongoose'),
Schema   = mongoose.Schema;
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.register = function(req, res) {

  // if(!req.body.name || !req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

  var user = new User();
  user.rut = req.body.rut;
  user.email = req.body.email;
  user.name = req.body.name;
  

  user.setPassword(req.body.password);

  

  user.save(function(err) {
    var token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token" : token
    });
   /*var status = new Status({
       ubicacion: req.body.ubicacion,
       latitud  : req.body.latitud,
       longitud : req.body.longitud,
       fecha : req.body.fecha,
       user : req.body.user
   });
   Post.find().populate('user').exec(function(err, doc){
   console.log(err);
   console.log(doc);
});*/
  });

};

module.exports.login = function(req, res) {

  // if(!req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

  passport.authenticate('local', function(err, user, info){
    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);

};

