import express from 'express';
import DbOperation from '../dboperation/DbOperation.js';
import { ComplianceSchema } from '../models/compliance/ComplianceModel.js';
import { ComplianceChecklistSchema } from '../models/compliance/ComplianceChecklistModel.js';
import { ComplianceReviewSchema } from '../models/compliance/ComplianceReviewModel.js';
import { LogEvent } from '../helpers/api/logger/logEvent.js';
import { testDbName, telemetryEvent, logComplianceAPIPostRequest, logComplianceAPIGetRequest, logComplianceAPIPatchRequest } from '../config/constants.js';

var dbName = testDbName;
var modelName = 'Compliance';
var schema = ComplianceSchema;

const ComplianceRouter = express.Router();

ComplianceRouter.post('/compliance', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, schema, logComplianceAPIPostRequest);

    var obj = {
        "complianceId": req.query.complianceId,
        "useCaseId": req.query.complianceUseCaseDocumentId,
        "name": req.query.complianceName,
        "country": req.query.complianceCountry,
        "state": req.query.complianceState,
        "city": req.query.complianceCity,
        "createdDate": req.query.complianceCreatedDate,
        "status": req.query.complianceStatus,
        "isActive": req.query.complianceIsActive,
        "frameworkId": req.query.complianceFrameworkDocumentId,
        "checklists": req.query.complianceChecklist,
        "reviews": req.query.complianceReviews
    };

    var compliance = DbOperation('New', dbName, modelName, schema, obj)
                        .then(newCompliance => res.status(200).send({ "valid": true, "object": "compliance", "data": JSON.stringify(newCompliance)} ))
                        .catch(e => res.status(400).send({ "valid": false, "object": "compliance", "data": e.toString()} ));
});

ComplianceRouter.get('/compliance', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, schema, logComplianceAPIGetRequest);

    var obj = { "isActive": true };

    var compliances = DbOperation('Get All', dbName, modelName, schema, obj)
                        .then(compliances => res.status(200).send({ "valid": true, "object": "compliance", "data": JSON.stringify(compliances)} ))
                        .catch(e => res.status(400).send({ "valid": false, "object": "compliance", "data": e.toString()} ));
});

ComplianceRouter.patch('/compliance', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, schema, logComplianceAPIPatchRequest);

    var obj = {
        searchRecordId: req.query.complianceDocumentId,
        searchObj: {
        "complianceId": req.query.complianceId,
        "useCaseId": req.query.complianceUseCaseDocumentId,
        "name": req.query.complianceName,
        "country": req.query.complianceCountry,
        "state": req.query.complianceState,
        "city": req.query.complianceCity,
        "createdDate": req.query.complianceCreatedDate,
        "status": req.query.complianceStatus,
        "isActive": req.query.complianceIsActive,
        "frameworkId": req.query.complianceFrameworkDocumentId,
        "checklists": req.query.complianceChecklist,
        "reviews": req.query.complianceReviews
        }
    };

    var compliance = DbOperation('Update By Value', dbName, modelName, schema, obj)
                        .then(results => res.status(200).send({ "valid": true, "object": "compliance", "data": JSON.stringify(results)} ))
                        .catch(e => res.status(400).send({ "valid": false, "object": "compliance", "data": e.toString()} ));
});

ComplianceRouter.post('/compliance/review', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, ComplianceReviewSchema, logComplianceReviewAPIPostRequest);

    var obj = {
        "reviewId": req.query.reviewId,
        "complianceId": req.query.complianceDocumentId,
        "name": req.query.reviewName,
        "description": req.query.reviewDescription,
        "items": req.query.reviewItem,
        "createdDate": req.query.reviewCreatedDate,
        "status": req.query.reviewStatus,
        "isActive": req.query.reviewIsActive
    };

    var review = DbOperation('New', dbName, 'Review', ComplianceReviewSchema, obj)
                        .then(newReview => res.status(200).send({ "valid": true, "object": "review", "data": JSON.stringify(newReview)} ))
                        .catch(e => res.status(400).send({ "valid": false, "object": "review", "data": e.toString()} ));
});

ComplianceRouter.get('/compliance/review', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, ComplianceReviewSchema, logComplianceReviewAPIGetRequest);

    var obj = { "isActive": true };

    var reviews = DbOperation('Get All', dbName, 'Review', ComplianceReviewSchema, obj)
                        .then(reviews => res.status(200).send({ "valid": true, "object": "review", "data": JSON.stringify(reviews)} ))
                        .catch(e => res.status(400).send({ "valid": false, "object": "review", "data": e.toString()} ));
});

ComplianceRouter.patch('/compliance/review', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, ComplianceReviewSchema, logComplianceReviewAPIPatchRequest);

    var obj = {
        searchRecordId: req.query.reviewDocumentId,
        searchObj: {
        "reviewId": req.query.reviewId,
        "complianceId": req.query.complianceDocumentId,
        "name": req.query.reviewName,
        "description": req.query.reviewDescription,
        "items": req.query.reviewItem,
        "createdDate": req.query.reviewCreatedDate,
        "status": req.query.reviewStatus,
        "isActive": req.query.reviewIsActive
        }
    };

    var review = DbOperation('Update By Value', dbName, 'Review', ComplianceReviewSchema, obj)
                        .then(results => res.status(200).send({ "valid": true, "object": "review", "data": JSON.stringify(results)} ))
                        .catch(e => res.status(400).send({ "valid": false, "object": "review", "data": e.toString()} ));
});

ComplianceRouter.post('/compliance/checklist', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, ComplianceChecklistSchema, logComplianceChecklistAPIPostRequest);

    var obj = {
        "checklistId": req.query.checklistId,
        "complianceId": req.query.complianceDocumentId,
        "name": req.query.checklistName,
        "description": req.query.checklistDescription,
        "items": req.query.checklistItem,
        "createdDate": req.query.checklistCreatedDate,
        "completedDate": req.query.checklistCompletedDate,
        "status": req.query.checklistStatus,
        "isActive": req.query.checklistIsActive
    };

    var checklist = DbOperation('New', dbName, 'Checklist', ComplianceChecklistSchema, obj)
                        .then(newChecklist => res.status(200).send({ "valid": true, "object": "checklist", "data": JSON.stringify(newChecklist)} ))
                        .catch(e => res.status(400).send({ "valid": false, "object": "checklist", "data": e.toString()} ));
});

ComplianceRouter.get('/compliance/checklist', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, ComplianceChecklistSchema, logComplianceChecklistAPIGetRequest);

    var obj = { "isActive": true };

    var checklists = DbOperation('Get All', dbName, 'Checklist', ComplianceChecklistSchema, obj)
                        .then(checklists => res.status(200).send({ "valid": true, "object": "compliance", "data": JSON.stringify(checklists)} ))
                        .catch(e => res.status(400).send({ "valid": false, "object": "compliance", "data": e.toString()} ));
});

ComplianceRouter.patch('/compliance/checklist', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, ComplianceChecklistSchema, logComplianceChecklistAPIPatchRequest);

    var obj = {
        searchRecordId: req.query.checklistDocumentId,
        searchObj: {
        "checklistId": req.query.checklistId,
        "complianceId": req.query.complianceDocumentId,
        "name": req.query.checklistName,
        "description": req.query.checklistDescription,
        "items": req.query.checklistItem,
        "createdDate": req.query.checklistCreatedDate,
        "completedDate": req.query.checklistCompletedDate,
        "status": req.query.checklistStatus,
        "isActive": req.query.checklistIsActive
        }
    };

    var review = DbOperation('Update By Value', dbName, 'CheckLlist', ComplianceChecklistSchema, obj)
                        .then(results => res.status(200).send({ "valid": true, "object": "checklist", "data": JSON.stringify(results)} ))
                        .catch(e => res.status(400).send({ "valid": false, "object": "checklist", "data": e.toString()} ));
});



export default ComplianceRouter;