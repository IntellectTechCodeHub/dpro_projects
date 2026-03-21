import express from 'express';
import DbOperation from '../dboperation/DbOperation';
import { UserAuthenticationSchema } from '../models/UserAuthenticationModel.js';
import { LogEvent } from '../helpers/api/logger/logEvent.js';
import { testDbName, telemetryEvent, logUserAuthenticationAPIPostRequest, logUserAuthenticationAPIGetRequest, logUserAuthenticationPatchRequest, logUserAuthenticationDeleteRequest } from '../config/constants';

const UserAuthenticationRouter = express.Router();

var dbName = testDbName;
var modelName = 'User Authentication';
var schema = UserAuthenticationSchema;

UserAuthenticationRouter.post('/userauthentications/:userAuthenticationId/', (req, res) => {
    //let log = LogEvent(dbName, telemetryEvent, schema, logUserAuthenticationPostRequest);

    var obj = {
        'userAuthenticationId': req.params.userAuthenticationId,
        'userDocumentId': req.params.userDocumentId,
        'userAuthenticated': req.params.userAuthenticated,
        'userAuthenticationCreatedDate': req.params.userAuthenticationCreatedDate,
        'userAuthenticationIsActive': req.params.userAuthenticationIsActive
    }

    var result = DbOperation('New', dbName, modelName, schema, obj)
                                .then( userauthentication => res.status(200).send({ 'valid': true, 'object': 'user authentication', 'data': JSON.stringify({userauthentication})})
                                .catch(e => res.status(400).send({ 'valid': false, 'object': 'userauthentication', 'data': e.toString()})));
});

UserAuthenticationRouter.get('/userauthentications', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, schema, logUserAuthenticationAPIGetRequest);

    var obj = {
        "isValid": true
    };

    var result = DbOperation('Get All', dbName, modelName, schema, obj)
                        .then(userauthentications => res.status(200).send({ 'valid': true, 'object': 'user authentication', 'data': JSON.stringify({userauthentications})}))
                        .catch(e => res.status(400).send({ 'valid': false, 'object': 'user authentication', 'data': e.toString()}));
});

UserAuthenticationRouter.patch('/userAuthenticationUpdateById', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, UserAuthenticationSchema, logUserAuthenticationPatchRequest);

    var obj = {
        searchRecordId: { "_id": req.query.userAuthenticationDocumentId },
        updateObj: {
            "userDocumentId": req.query.userDocumentId,
            "userAuthenticated": req.query.userAuthenticated,
            "userAuthenticationCreatedDate":req.query.userAuthenticationCreatedDate,
            "userAuthenticationIsActive": req.query.userAuthenticationIsActive
        }
    }
});

UserAuthenticationRouter.delete('/userAuthenticationDeleteById', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, schema, logUserAuthenticationDeleteRequest);

    let obj = {
        searchRecordId: { "_id": req.query.userAuthenticationDocumentId}
    };

    var result = DbOperation('Delete By Value', dbName, modelName, schema, obj)
                            .then(result => res.status.send({ 'valid': true, 'object': 'user authentication', 'data': JSON.stringify(result)}))
                            .catch(e => res.status(400).send({ 'valid': false, 'object': 'user authentication', 'data': e.toString()}));
});

export default UserAuthenticationRouter;