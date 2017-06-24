var mongoose = require('mongoose'),
Schema   = mongoose.Schema;
var User = mongoose.model('User');

var estadoSchema = new mongoose.Schema({
   temperatura: { type: Number},
    pulso: {type: Number},
    ubicacion: {type: String},
    date: {type: Date, default: Date.now},
    user: { type: Schema.ObjectId, ref: "User" }
});


mongoose.model('Estado', estadoSchema);

