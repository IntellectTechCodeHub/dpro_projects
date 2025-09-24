import express from 'express';
import DbOperation from '../dboperation/DbOperation.js';
import { GovernanceSchema } from '../models/governance/GovernanceModel.js';
import { PolicySchema } from '../models/governance/PolicyModel.js';
import { RegulatingBodySchema } from '../models/governance/RegulatingBodyModel.js';
import { RegulationSchema } from '../models/governance/RegulationModel.js';


var dbName = 'AGTest';
var modelName = 'Governance';
var schema = GovernanceSchema;

const GovernanceRouter = express.Router();

GovernanceRouter.post('/governance', (req, res) => {
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

GovernanceRouter.post('/governnce/policy', (req, res) => {
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

GovernanceRouter.post('/governance/regulatingbody', (req, res) => {
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

GovernanceRouter.post('/governance/regulation', (req, res) => {
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

export default GovernanceRouter;