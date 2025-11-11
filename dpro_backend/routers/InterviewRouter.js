import express from 'express';
import DbOperation from '../dboperation/DbOperation.js';
import { InterviewSchema } from '../models/interview/InterviewModel.js';
import { AssessmentSchema } from '../models/interview/AssessmentModel.js';
import { ReviewSchema } from '../models/interview/ReviewModel.js';
import { LogEvent } from '../helpers/api/logger/logEvent.js';
import { testDbName, telemetryEvent, logInterviewAPIPostRequest, logInterviewAPIGetRequest, logInterviewAPIPatchRequest } from '../config/constants.js';
import { logAssessmentAPIPostRequest, logAssessmentAPIGetRequest, logAssessmentAPIPatchRequest } from '../config/constants.js';
import { logInterviewReviewAPIPostRequest, logInterviewReviewAPIGetRequest, logInterviewReviewAPIPatchRequest } from '../config/constants.js';

var dbName = testDbName;
var modelName = 'Interview';
var schema = InterviewSchema;

const InterviewRouter = express.Router();

InterviewRouter.post('/interview', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, schema, logInterviewAPIPostRequest);

    var obj = {
        "interviewId": req.query.interviewId,
        "analysisId": req.query.analysisDocumentId,
        "name": req.query.interviewName,
        "description": req.query.interviewDescription,
        "attendeeIds": req.query.interviewAttendeeId,
        "createdDate": req.query.interviewCreatedDate,
        "completedDate": req.query.interviewCompletedDate,
        "isComplete": req.query.interviewIsComplete,
        "isActive": req.query.interviewIsActive,
        "assessments": req.query.interviewAssessment
    };

    console.log(obj);

    var interview = DbOperation('New', dbName, modelName, schema, obj)
                    .then(newInterview => res.status(200).send({ "valid": true, "object": "interview", "data": JSON.stringify(newInterview) }))
                    .catch(e => res.status(400).send({ "valid": false, "object": "interview", "data": e.toString() }));

});

InterviewRouter.get('/interview', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, schema, logInterviewAPIGetRequest);

    var obj = { "isValid": true };

    var interviews = DbOperation('Get All', dbName, modelName, schema, obj)
                    .then(interviews => res.status(200).send({ "valid": true, "object": "interview", "data": JSON.stringify(interviews) }))
                    .catch(e => res.status(400).send({ "valid": false, "object": "interview", "data": e.toString() }));
});

InterviewRouter.patch('/interview', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, schema, logInterviewAPIPatchRequest);

    var obj = {
        searchRecordId: { "_id": req.query.interviewDocumentId },
        updateObj: {
            "interviewId": req.query.interviewId,
            "analysisId": req.query.analysisDocumentId,
            "name": req.query.interviewName,
            "description": req.query.interviewDescription,
            "attendeeIds": req.query.interviewAttendeeId,
            "createdDate": req.query.interviewCreatedDate,
            "completedDate": req.query.interviewCompletedDate,
            "isComplete": req.query.interviewIsComplete,
            "isActive": req.query.interviewIsActive,
            "assessments": req.query.interviewAssessments
        }
    }

    console.log(obj);

    var interview = DbOperation('Update By Value', dbName, modelName, schema, obj)
                    .then(results => res.status(200).send({ "valid": true, "object": "interview", "data": JSON.stringify(results) }))
                    .catch(e => res.status(400).send({ "valid": false, "object": "interview", "data": e.toString() }));
});

InterviewRouter.post('/interview/assessment', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, AssessmentSchema, logAssessmentAPIPostRequest);

    var obj = {
        "assessmentId": req.query.assessmentId,
        "interviewId": req.query.interviewDocumentId,
        "name": req.query.assessmentName,
        "description": req.query.assessmentDescription,
        "questions": req.query.assessmentQuestion,
        "createdDate": req.query.assessmentCreatedDate,
        "status": req.query.assessmentStatus,
        "isActive": req.query.assessmentIsActive
    };

    console.log(obj);

    var assessment = DbOperation('New', dbName, "Assessment", AssessmentSchema, obj)
                    .then(newAssessment => res.status(200).send({ "valid": true, "object": "assessment", "data": JSON.stringify(newAssessment) }))
                    .catch(e => res.status(400).send({ "valid": false, "object": "assessment", "data": e.toString() }));

});

InterviewRouter.get('/interview/assessment', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, AssessmentSchema, logAssessmentAPIGetRequest);

    var obj = { "isValid": true };

    var assessments = DbOperation('Get All', dbName, "Assessment", AssessmentSchema, obj)
                    .then(assessments => res.status(200).send({ "valid": true, "object": "assessment", "data": JSON.stringify(assessments) }))
                    .catch(e => res.status(400).send({ "valid": false, "object": "assessment", "data": e.toString() }));
});

InterviewRouter.patch('/interview/assessment', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, AssessmentSchema, logAssessmentAPIPatchRequest);

    var obj = {
        searchRecordId: { "_id": req.query.assessmentDocumentId },
        updateObj: {
            "assessmentId": req.query.assessmentId,
            "interviewId": req.query.interviewDocumentId,
            "name": req.query.assessmentName,
            "description": req.query.assessmentDescription,
            "questions": req.query.assessmentQuestion,
            "createdDate": req.query.assessmentCreatedDate,
            "status": req.query.assessmentStatus,
            "isActive": req.query.assessmentIsActive
        }
    };

    console.log(obj);

    var assessment = DbOperation('Update By Value', dbName, "Assessment", AssessmentSchema, obj)
                    .then(results => res.status(200).send({ "valid": true, "object": "assessment", "data": JSON.stringify(results) }))
                    .catch(e => res.status(400).send({ "valid": false, "object": "assessment", "data": e.toString() }));
});

InterviewRouter.post('/interview/review', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, ReviewSchema, logInterviewReviewAPIPostRequest);

    var obj = { 
        "reviewId": req.query.reviewId,
        "interviewId": req.query.interviewDocumentId,
        "name": req.query.reviewName,
        "description": req.query.reviewDescription,
        "items": req.query.reviewItem,
        "createdDate": req.query.reviewCreatedDate,
        "status": req.query.reviewStatus,
        "isActive": req.query.reviewIsActive
    };

    console.log(obj);

    var review = DbOperation('New', dbName, "Review", ReviewSchema, obj)
                    .then(review => res.status(200).send({ "valid": true, "object": "review", "data": JSON.stringify(review) }))
                    .catch(e => res.status(400).send({ "valid": false, "object": "review", "data": e.toString() }));
});

InterviewRouter.get('/interview/review', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, ReviewSchema, logInterviewReviewAPIGetRequest);

    var obj = { "isValid": true };

    var reviews = DbOperation('Get All', dbName, "Review", ReviewSchema, obj)
                    .then(reviews => res.status(200).send({ "valid": true, "object": "review", "data": JSON.stringify(reviews) }))
                    .catch(e => res.status(400).send({ "valid": false, "object": "review", "data": e.toString() }));
});

InterviewRouter.patch('/interview/review', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, ReviewSchema, logInterviewReviewAPIPatchRequest);

    var obj = {
        searchRecordId: { "_id": req.query.reviewDocumentId },
        updateObj: {
            "reviewId": req.query.reviewId,
            "interviewId": req.query.interviewDocumentId,
            "name": req.query.reviewName,
            "description": req.query.reviewDescription,
            "items": req.query.reviewItem,
            "createdDate": req.query.reviewCreatedDate,
            "status": req.query.reviewStatus,
            "isActive": req.query.reviewIsActive
        }
    };

    var interview = console.log(obj);

    var interview = DbOperation('Update By Value', dbName, "Review", ReviewSchema, obj)
                    .then(results => res.status(200).send({ "valid": true, "object": "review", "data": JSON.stringify(results) }))
                    .catch(e => res.status(400).send({ "valid": false, "object": "review", "data": e.toString() }));


});

export default InterviewRouter;