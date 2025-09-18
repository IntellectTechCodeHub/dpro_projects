import express from 'express';
import DbOperation from '../dboperation/DbOperation.js';
import { UserSchema } from '../models/UserModel.js';

const UserRouter = express.Router();

var dbName = 'AGTest';
var modelName = 'User';
var schema = UserSchema;

UserRouter.post('/users/:userId/:name/:email/:password/:phone/:isValid', (req, res) => { 
    
    var obj = {
            "userId": req.params.userId,
            "name": req.params.name,
            "email": req.params.email,
            "password": req.params.password,
            "phone": req.params.phone,
            "isValid": req.params.isValid
    };

    var result = DbOperation('New', dbName, modelName, schema, obj)
                                .then(user => res.status(200).send({ 'valid': true, 'object': 'user', 'data': JSON.stringify({user})}))
                                .catch(e => res.status(400).send({ 'valid': false, 'object': "user", 'data': e.toString()}));
});

UserRouter.get('/users', (req, res) => { 
    var obj = { "isValid": true };

    var result = DbOperation('Get All', dbName, modelName, schema, obj)
                            .then(users => res.status(200).send({ 'valid': true, 'object': 'user', 'data': JSON.stringify({users})}))
                                .catch(e => res.status(400).send({ 'valid': false, 'object': "user", 'data': e.toString()}));
});

UserRouter.get('/userByEmail/:email', (req, res) => {
    var obj = { 
        "email": req.params.email,
        "isValid": true
     };
    
    var result = DbOperation('Get All By Value', dbName, modelName, schema, obj)
                            .then(users => res.status(200).send({ 'valid': true, 'object': 'user', 'data': JSON.stringify({users})}))
                            .catch(e => res.status(400).send({ 'valid': false, 'object': "user", 'data': e.toString()}));

});

UserRouter.get('/userByName/:name', (req, res) => { 
    var obj = { 
        "name": req.params.name,
        "isValid": true
     };
    
    var result = DbOperation('Get All By Value', dbName, modelName, schema, obj)
                            .then(users => res.status(200).send({ 'valid': true, 'object': 'user', 'data': JSON.stringify({users})}))
                            .catch(e => res.status(400).send({ 'valid': false, 'object': "user", 'data': e.toString()}));
});

UserRouter.patch('/userUpdateById', (req, res) => {
    var obj = {
        searchUserId: { "userId": req.params.userId },
        searchRecordId: { "_id": req.query.id},
        updateObj: {
            "name": req.query.name,
            "email": req.query.email,
            "password": req.query.password,
            "phone": req.query.phone,
            "isValid": req.query.isValid
        } 
    };

    var result = DbOperation('Update By Value', dbName, modelName, schema, obj)
                            .then(result => res.status(200).send({ 'valid': true, 'object': 'user', 'data': JSON.stringify({result})}))
                            .catch(e => res.status(400).send({ 'valid': false, 'object': "user", 'data': e.toString()}));
});

UserRouter.delete('/userDeleteById', (req, res) => {
    var obj = {
        searchUserId: { "userId": req.query.userId },
        searchRecordId: { "_id": req.query.id}
    };
    
    var result = DbOperation('Delete By Value', dbName, modelName, schema, obj)
                            .then(result => res.status(200).send({ 'valid': true, 'object': 'user', 'data': JSON.stringify({result})}))
                            .catch(e => res.status(400).send({ 'valid': false, 'object': "user", 'data': e.toString()}));
});

export default UserRouter;