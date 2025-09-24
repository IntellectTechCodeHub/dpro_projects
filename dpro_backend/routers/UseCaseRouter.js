import express from 'express';
import DbOperation from '../dboperation/DbOperation.js';
import { UseCaseSchema } from '../models/UseCaseModel.js';



var dbName = 'AGTest';
var modelName = 'Use Case';
var schema = UseCaseSchema;

const UseCaseRouter = express.Router();

UseCaseRouter.post('/usecase', (req, res) => {
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

export default UseCaseRouter;