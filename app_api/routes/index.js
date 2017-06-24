var express = require('express');
var router = express.Router(),
	app      = express();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlEstados = require('../controllers/estado');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.post('/estados', ctrlEstados.estado);

//estados
/*router.post('/estados', ctrlEstados.estados);*/

/*var estados = express.Router();
  estados.route('/estados')  
  .post(ctrlEstados.addEstado);
	app.use('/api', estados); */

module.exports = router;
