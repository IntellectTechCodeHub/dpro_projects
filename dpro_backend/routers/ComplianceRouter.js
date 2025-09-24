import express from 'express';
import DbOperation from '../dboperation/DbOperation.js';
import { ComplianceSchema } from '../models/compliance/ComplianceModel.js';
import { ComplianceChecklistSchema } from '../models/compliance/ComplianceChecklistModel.js';
import { ComplianceReviewSchema } from '../models/compliance/ComplianceReviewModel.js';


var dbName = 'AGTest';
var modelName = 'Compliance';
var schema = ComplianceSchema;

const ComplianceRouter = express.Router();

ComplianceRouter.post('/compliance', (req, res) => {
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

ComplianceRouter.post('/compliance/review', (req, res) => {
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
                        .catch(e => res.status(400).send({ "valid": false, "object": "compliance", "data": e.toString()} ));
});

ComplianceRouter.post('/compliance/checklist', (req, res) => {
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
                        .then(newChecklist => res.status(200).send({ "valid": true, "object": "review", "data": JSON.stringify(newChecklist)} ))
                        .catch(e => res.status(400).send({ "valid": false, "object": "compliance", "data": e.toString()} ));
});

export default ComplianceRouter;