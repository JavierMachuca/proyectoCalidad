process.env.NODE_ENV = 'test';

var mongoose = require("mongoose");
var users = require('../app_api/models/users');

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('Post Usuario registrar',()=>{
    
    it('Registro de usuario con resultado incorrecto',(done)=>{

        var newUser = {
            rut : 111111,
            email :"test@testcl",
            name : "asd",
            password:"test123"
        };

        chai.request(server)
            .post('/api/register')
            .send(newUser)
            .end((err, res) => {                     
                res.should.have.status(200);
                done();
            });
    });

});
/*
describe('Post Usuario Login',()=>{
    
    it('Login de usuario con resultado correcto',(done)=>{

        var newUser = {
            //rut : "17910255-2",
            email :"test@testcl",
            //name : "testUser",
            password:"tes"
        };

        chai.request(server)
            .post('/api/login')
            .send(newUser)
            .end((err, res) => {                     
                res.should.have.status(200);
                done();
            });
    });

});*/