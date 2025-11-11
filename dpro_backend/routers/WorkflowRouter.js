import express from 'express';
import DbOperation from '../dboperation/DbOperation.js';
import { WorkflowSchema } from '../models/WorkflowModel.js';
import { LogEvent } from '../helpers/api/logger/logEvent.js';
import { testDbName, telemetryEvent, logWorkflowAPIPostRequest, logWorkflowAPIGetRequest, logWorkflowAPIPatchRequest } from '../config/constants.js';

const WorkflowRouter = express.Router();

var dbName = testDbName;
var modelName = 'Workflow';
var schema = WorkflowSchema;

WorkflowRouter.post('/workflow', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, schema, logWorkflowAPIPostRequest);

    var obj = {
        "workflowId": req.query.workflowId,
        "businessId": req.query.businessDocumentId,
        "name": req.query.workflowName,
        "description": req.query.workflowDescription,
        "createdDate": req.query.workflowCreatedDate,
        "isActive": req.query.workflowIsActive,
        "policies": req.query.workflowPolicy
    };
    console.log(obj);
    var workflow = DbOperation('New', dbName, modelName, schema, obj)
                        .then(newWorkflow => res.status(200).send({ "valid": true, "object": "workflow", "data": JSON.stringify(newWorkflow)} ))
                        .catch(e => res.status(400).send({ "valid": false, "object": "workflow", "data": e.toString() }));
});

WorkflowRouter.get('/workflow', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, schema, logWorkflowAPIGetRequest);

    var obj = { "isValid": true };

    var workflows = DbOperation('Get All', dbName, modelName, schema, obj)
                        .then(workflows => res.status(200).send({ "valid": true, "object": "workflow", "data": JSON.stringify(workflows)} ))
                        .catch(e => res.status(400).send({ "valid": false, "object": "workflow", "data": e.toString() }));


});

WorkflowRouter.patch('/workflow', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, schema, logWorkflowAPIPatchRequest);

    var obj = {
        searchRecordId: { "_id": req.query.workflowDocumentId },
        updateObj: {
            "workflowId": req.query.workflowId,
            "businessId": req.query.businessDocumentId,
            "name": req.query.workflowName,
            "description": req.query.workflowDescription,
            "createdDate": req.query.workflowCreatedDate,
            "isActive": req.query.workflowIsActive,
            "policies": req.query.workflowPolicy
        }
    };

    var workflow = DbOperation('Update By Value', dbName, modelName, schema, obj)
                        .then(results => res.status(200).send({ "valid": true, "object": "workflow", "data": JSON.stringify(results)} ))
                        .catch(e => res.status(400).send({ "valid": false, "object": "workflow", "data": e.toString() }));
});

export default WorkflowRouter;