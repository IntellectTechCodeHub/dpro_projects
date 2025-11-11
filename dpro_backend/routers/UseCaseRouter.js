import express from 'express';
import DbOperation from '../dboperation/DbOperation.js';
import { UseCaseSchema } from '../models/UseCaseModel.js';
import { LogEvent } from '../helpers/api/logger/logEvent.js';
import { testDbName, telemetryEvent, logUseCaseAPIPostRequest, logUseCaseAPIGetRequest, logUseCaseAPIPatchRequest } from '../config/constants.js';


var dbName = testDbName;
var modelName = 'Use Case';
var schema = UseCaseSchema;

const UseCaseRouter = express.Router();

UseCaseRouter.post('/usecase', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, schema, logUseCaseAPIPostRequest);

    var obj = {
        "useCaseId": req.query.useCaseId,
        "name": req.query.useCaseName,
        "description": req.query.useCaseDescription,
        "createdDate": req.query.useCaseCreatedDate,
        "isActive": req.query.useCaseIsActive,
        "stakeholders": req.query.useCaseStakeholders,
        "governances": req.query.useCaseGovernances,
        "compliances": req.query.useCaseCompliance
    };

    var useCase = DbOperation('New', dbName, modelName, schema, obj)
                    .then(newUseCase => res.status(200).send({ valid: true, object: "use case", data: JSON.stringify(newUseCase) }))
                    .catch(e => res.status(400).send({ "valid": false, "object": "use case", data: e.toString() }));
});

UseCaseRouter.get('/usecase', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, schema, logUseCaseAPIGetRequest);
    
    var obj = { "isActive": req.query.useCaseIsActive };

    var useCases = DbOperation('Get All', dbName, modelName, schema, obj)
                    .then(useCases => res.status(200).send({ valid: true, object: "use case", data: JSON.stringify(useCases) }))
                    .catch(e => res.status(400).send({ "valid": false, "object": "use case", data: e.toString() }));
});

UseCaseRouter.patch('/usecase', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, schema, logUseCaseAPIPatchRequest);

    var obj = {
        searchRecordId: { _id: req.query.useCaseDocumentId },
        searchObj: {
            "useCaseId": req.query.useCaseId,
            "name": req.query.useCaseName,
            "description": req.query.useCaseDescription,
            "createdDate": req.query.useCaseCreatedDate,
            "isActive": req.query.useCaseIsActive,
            "stakeholders": req.query.useCaseStakeholders,
            "governances": req.query.useCaseGovernances,
            "compliances": req.query.useCaseCompliance
        }
    };

    var useCase = DbOperation('Update By Value', dbName, modelName, schema, obj)
                    .then(newUseCase => res.status(200).send({ valid: true, object: "use case", data: JSON.stringify(newUseCase) }))
                    .catch(e => res.status(400).send({ "valid": false, "object": "use case", data: e.toString() }));
});

export default UseCaseRouter;