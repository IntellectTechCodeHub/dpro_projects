import express from 'express';
import DbOperation from '../dboperation/DbOperation.js';
import { GovernanceSchema } from '../models/governance/GovernanceModel.js';
import { PolicySchema } from '../models/governance/PolicyModel.js';
import { RegulatingBodySchema } from '../models/governance/RegulatingBodyModel.js';
import { RegulationSchema } from '../models/governance/RegulationModel.js';
import { LogEvent } from '../helpers/api/logger/logEvent.js';
import { testDbName, telemetryEvent, logGovernanceAPIPostRequest, logGovernanceAPIGetRequest, logGovernanceAPIPatchRequest } from '../config/constants.js';
import { logGovernancePolicyAPIPostRequest, logGovernancePolicyAPIGetRequest, logGovernancePolicyAPIPatchRequest} from '../config/constants.js';
import { logGovernanceRegulatingBodyAPIPostRequest, logGovernanceRegulatingBodyAPIGetRequest, logGovernanceRegulatingBodyAPIPatchRequest } from '../config/constants.js';
import { logGovernanceRegulationAPIPostRequest, logGovernanceRegulationAPIGetRequest, logGovernanceRegulationAPIPatchRequest } from '../config/constants.js';


var dbName = testDbName;
var modelName = 'Governance';
var schema = GovernanceSchema;

const GovernanceRouter = express.Router();

GovernanceRouter.post('/governance', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, schema, logGovernanceAPIPostRequest);

    var obj = {
        "governanceId": req.query.governanceId,
        "useCaseId": req.query.useCaseDocumentId,
        "name": req.query.governanceName,
        "country": req.query.governanceCountry,
        "state": req.query.governanceState,
        "city": req.query.governanceCity,
        "createdDate": req.query.governanceCreatedDate,
        "status": req.query.governanceStatus,
        "isActive": req.query.governanceIsActive,
        "policies": req.query.governancePolicies
    };

    var governance = DbOperation('New', dbName, modelName, schema, obj)
                        .then(newGovernance => res.status(200).send({ "valid": true, "object": "governance", "data": JSON.stringify(newGovernance) }))
                        .catch(e => res.send(400).send({ "valid": false, "object": "governance", "data": e.toString() }));
});

GovernanceRouter.get('/governance', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, schema, logGovernanceAPIGetRequest);

    var obj = { "isActive": req.query.governanceIsActive };

    var governances = DbOperation('Get All', dbName, modelName, schema, obj)
                        .then(governances => res.status(200).send({ "valid": true, "object": "governance", "data": JSON.stringify(governances) }))
                        .catch(e => res.send(400).send({ "valid": false, "object": "governance", "data": e.toString() }));
});

GovernanceRouter.patch('/governance', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, schema, logGovernanceAPIPatchRequest);

    var obj = {
        searchRecordId: { "_id": req.query.governanceDocumentId },
        searchObj: {
            "governanceId": req.query.governanceId,
            "useCaseId": req.query.useCaseDocumentId,
            "name": req.query.governanceName,
            "country": req.query.governanceCountry,
            "state": req.query.governanceState,
            "city": req.query.governanceCity,
            "createdDate": req.query.governanceCreatedDate,
            "status": req.query.governanceStatus,
            "isActive": req.query.governanceIsActive,
            "policies": req.query.governancePolicies
        }
    };

    var governance = DbOperation('Update By Value', dbName, modelName, schema, obj)
                        .then(results => res.status(200).send({ "valid": true, "object": "governance", "data": JSON.stringify(results) }))
                        .catch(e => res.send(400).send({ "valid": false, "object": "governance", "data": e.toString() }));
});

GovernanceRouter.post('/governance/policy', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, PolicySchema, logGovernancePolicyAPIPostRequest);
    
    var obj = {
        "policyId": req.query.policyId,
        "goverenanceId": req.query.governanceDocumentId,
        "name": req.query.policyName,
        "description": req.query.policyDescription,
        "policyType": req.query.policyType,
        "createdDate": req.query.policyCreatedDate,
        "isActive": req.query.policyIsActive,
        "regulatingBodyId": req.query.policyRegulatingBodyDocumentId,
        "regulationId": req.query.policyRegulationId
    };

    var policy = DbOperation('New', dbName, 'Policy', PolicySchema, obj)
                        .then(newPolicy => res.status(200).send({ "valid": true, "object": "policy", "data": JSON.stringify(newPolicy) }))
                        .catch(e => res.send(400).send({ "valid": false, "object": "policy", "data": e.toString() }));
});

GovernanceRouter.get('/governance/policy', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, PolicySchema, logGovernancePolicyAPIGetRequest);
    
    var obj = { "isActive": req.query.policyIsActive };

    var policies = DbOperation('Get All', dbName, 'Policy', PolicySchema, obj)
                        .then(policies => res.status(200).send({ "valid": true, "object": "policy", "data": JSON.stringify(policies) }))
                        .catch(e => res.send(400).send({ "valid": false, "object": "policy", "data": e.toString() }));
});

GovernanceRouter.patch('/governance/policy', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, PolicySchema, logGovernancePolicyAPIPatchRequest);
    
    var obj = {
        searchObj: { "_id": req.query.policyDocumentId },
        searchObj: {
            "policyId": req.query.policyId,
            "goverenanceId": req.query.governanceDocumentId,
            "name": req.query.policyName,
            "description": req.query.policyDescription,
            "policyType": req.query.policyType,
            "createdDate": req.query.policyCreatedDate,
            "isActive": req.query.policyIsActive,
            "regulatingBodyId": req.query.policyRegulatingBodyDocumentId,
            "regulationId": req.query.policyRegulationId
        }
    };

    var policy = DbOperation('Update By Value', dbName, 'Policy', PolicySchema, obj)
                        .then(results => res.status(200).send({ "valid": true, "object": "policy", "data": JSON.stringify(results) }))
                        .catch(e => res.send(400).send({ "valid": false, "object": "policy", "data": e.toString() }));
});

GovernanceRouter.post('/governance/regulatingbody', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, RegulatingBodySchema, logGovernanceRegulatingBodyAPIPostRequest);

    var obj = {
        "regulatingBodyId": req.query.regulatingBodyId,
        "name": req.query.regulatingBodyName,
        "country": req.query.regulatingBodyCountry,
        "state": req.query.regulatingBodyState,
        "city": req.query.regulatingBodyCity,
        "createdDate": req.query.regulatingBodyCreatedDate,
        "isActive": req.query.regulatingBodyIsActive,
    };

    var regulatingBody = DbOperation('New', dbName, 'Regulating Body', RegulatingBodySchema, obj)
                        .then(newRegulatingBody => res.status(200).send({ "valid": true, "object": "regulating dody", "data": JSON.stringify(newRegulatingBody) }))
                        .catch(e => res.send(400).send({ "valid": false, "object": "regulating body", "data": e.toString() }));
});

GovernanceRouter.get('/governance/regulatingbody', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, RegulatingBodySchema, logGovernanceRegulatingBodyAPIGetRequest);

    var obj = { "isActive": req.query.regulatingBodyIsActive };

    var regulatingBodies = DbOperation('Get All', dbName, 'Regulating Body', RegulatingBodySchema, obj)
                        .then(regulatingBodies => res.status(200).send({ "valid": true, "object": "regulating dody", "data": JSON.stringify(regulatingBodies) }))
                        .catch(e => res.send(400).send({ "valid": false, "object": "regulating body", "data": e.toString() }));
});

GovernanceRouter.patch('/governance/regulatingbody', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, RegulatingBodySchema, logGovernanceRegulatingBodyAPIPatchRequest);

    var obj = {
        searchRecordId: { "_id": req.query.regulatingBodyDocumentId },
        searchObj: {
            "regulatingBodyId": req.query.regulatingBodyId,
            "name": req.query.regulatingBodyName,
            "country": req.query.regulatingBodyCountry,
            "state": req.query.regulatingBodyState,
            "city": req.query.regulatingBodyCity,
            "createdDate": req.query.regulatingBodyCreatedDate,
            "isActive": req.query.regulatingBodyIsActive
        }
    };

    var regulatingBody = DbOperation('Update By Value', dbName, 'Regulating Body', RegulatingBodySchema, obj)
                        .then(results => res.status(200).send({ "valid": true, "object": "regulating dody", "data": JSON.stringify(results) }))
                        .catch(e => res.send(400).send({ "valid": false, "object": "regulating body", "data": e.toString() }));
});

GovernanceRouter.post('/governance/regulation', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, RegulationSchema, logGovernanceRegulationAPIPostRequest);

    var obj = {
        "regulationId": req.query.regulationId,
        "name": req.query.regulationName,
        "description": req.query.regulationDescription,
        "regulatingBodyId": req.query.regulatingBodyId,
        "createdDate": req.query.regulationCreatedDate,
        "isActive": req.query.regulationIsActive
    };

    var regulation = DbOperation('New', dbName, "Regulation", RegulationSchema, obj)
                        .then(newRegulation => res.status(200).send({ "valid": true, "object": "regulation", "data": JSON.stringify(newRegulation) }))
                        .catch(e => res.send(400).send({ "valid": false, "object": "regulation", "data": e.toString() }));
});

GovernanceRouter.get('/governance/regulation', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, RegulationSchema, logGovernanceRegulationAPIGetRequest);

    var obj = {
        "regulationId": req.query.regulationId,
        "name": req.query.regulationName,
        "description": req.query.regulationDescription,
        "regulatingBodyId": req.query.regulatingBodyId,
        "createdDate": req.query.regulationCreatedDate,
        "isActive": req.query.regulationIsActive
    };

    var regulations = DbOperation('Get All', dbName, "Regulation", RegulationSchema, obj)
                        .then(regulations => res.status(200).send({ "valid": true, "object": "regulation", "data": JSON.stringify(regulations) }))
                        .catch(e => res.send(400).send({ "valid": false, "object": "regulation", "data": e.toString() }));
});

GovernanceRouter.patch('/governance/regulation', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, RegulationSchema, logGovernanceRegulationAPIPatchRequest);

    var obj = {
        searchRecordId: { "_id": req.query.regulationDocumentId },
        searchObj: {
            "regulationId": req.query.regulationId,
            "name": req.query.regulationName,
            "description": req.query.regulationDescription,
            "regulatingBodyId": req.query.regulatingBodyId,
            "createdDate": req.query.regulationCreatedDate,
            "isActive": req.query.regulationIsActive
        }
    };

    var regulation = DbOperation('Update By Value', dbName, "Regulation", RegulationSchema, obj)
                        .then(results => res.status(200).send({ "valid": true, "object": "regulation", "data": JSON.stringify(results) }))
                        .catch(e => res.send(400).send({ "valid": false, "object": "regulation", "data": e.toString() }));
});

export default GovernanceRouter;