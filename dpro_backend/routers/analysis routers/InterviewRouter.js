import express from 'express';
import DbOperation from '../../dboperation/DbOperation.js';
import { InterviewSchema } from '../../models/analysis/interview/InterviewModel.js';
import { ScheduleSchema } from '../../models/analysis/schedule/ScheduleModel.js';
import { AssessmentSchema } from '../../models/analysis/interview/AssessmentModel.js';
import { ReviewSchema } from '../../models/analysis/review/ReviewModel.js';
import { LogEvent } from '../../helpers/api/logger/logEvent.js';
import { testDbName, telemetryEvent, logInterviewAPIPostRequest, logInterviewAPIGetRequest, logInterviewAPIPatchRequest } from '../../config/constants.js';
import { logAssessmentAPIPostRequest, logAssessmentAPIGetRequest, logAssessmentAPIPatchRequest } from '../../config/constants.js';
import { logInterviewReviewAPIPostRequest, logInterviewReviewAPIGetRequest, logInterviewReviewAPIPatchRequest } from '../../config/constants.js';
import { logInterviewIntakeAPIPostRequest, logInterviewIntakeAPIGetRequest, logInterviewIntakeAPIPatchRequest} from '../../config/constants.js';
import { logInterviewAnalystAPIPostRequest, logInterviewAnalystAPIGetRequest, logInterviewAnalystAPIPatchRequest} from '../../config/constants.js';
import { logInterviewScheduleAPIPostRequest, logInterviewScheduleAPIGetRequest, logInterviewScheduleAPIPatchRequest } from '../../config/constants.js';
import { AnalystSchema } from '../../models/analysis/analyst/AnalystModel.js';
import { IntakeSchema } from '../../models/analysis/intake/IntakeModel.js';

var dbName = testDbName;
var modelName = 'Interview';
var schema = InterviewSchema;

const InterviewRouter = express.Router();

InterviewRouter.post('/interview', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, schema, logInterviewAPIPostRequest);

    var obj = {
        "interviewId": req.query.interviewId,
        "analysisDocumentId": req.query.analysisDocumentId,
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

InterviewRouter.post('/interview/intake', (req, res) => { 
    let log = LogEvent(dbName, telemetryEvent, IntakeSchema, logInterviewIntakeAPIPostRequest);

    var obj = {
        "intakeRequestId": req.query.intakeRequestId,
        "type": req.query.intakeType,
        "meetings": req.query.intakeMeetings,
        "contact": req.query.intakeContact, 
        "phone": req.query.intakePhone,
        "availability": req.query.intakeAvailability,
        "privacy": req.query.intakePrivacy,
        "createdDate": req.query.intakeCreatedDate,
        "completedDate": req.query.intakeCompletedDate,
        "status": req.query.intakeStatus,
        "isActive": req.query.intakeIsActive
    };

    console.log(obj);

    var intake = DbOperation("New", dbName, "Intake", IntakeSchema, obj)
                   .then(newIntake => res.status(200).send({ "valid": true, "object": "intake", "data": JSON.stringify(newIntake) }))
                   .catch(e => res.status(400).send({ "valid": true, "object": "intake", "data": e.toString() }));
});

InterviewRouter.get('/interview/intake', (req, res) => { 
    let log = LogEvent(dbName, telemetryEvent, IntakeSchema, logInterviewIntakeAPIGetRequest);

    var obj = { "isValid": true };

    console.log(obj);

    var intake = DbOperation('Get All', dbName, "Intake", IntakeSchema, obj)
                   .then(results => res.status(200).send({ "valid": true, "object": "intake", "data": JSON.stringify(results) }))
                   .catch(e => res.status(400).send({ "valid": true, "object": "intake", "data": e.toString() }));
});

InterviewRouter.patch('/interview/intake', (req, res) => { 
    let log = LogEvent(dbName, telemetryEvent, IntakeSchema, logInterviewIntakeAPIPatchRequest);

    var obj = {
        searchRecordId: { "_id": req.query.intakeDocumentId },
        updateObj: {
            "intakeRequestId": req.query.intakeRequestId,
            "type": req.query.intakeType,
            "meetings": req.query.intakeMeetings,
            "contact": req.query.intakeContact,
            "phone": req.query.intakePhone,
            "availability": req.query.intakeAvailability,
            "privacy": req.query.intakePrivacy,
            "createdDate": req.query.intakeCreatedDate,
            "completedDate": req.query.intakeCompletedDate,
            "status": req.query.intakeStatus,
            "isActive": req.query.intakeIsActive
        }
    };

    console.log(obj);

    var intake = DbOperation('Update By Value', dbName, "Intake", IntakeSchema, obj)
                   .then(results => res.status(200).send({ "valid": true, "object": "intake", "data": JSON.stringify(results) }))
                   .catch(e => res.status(400).send({ "valid": true, "object": "intake", "data": e.toString() }));
});

InterviewRouter.post('/interview/analyst', (req, res) => { 
    let log = LogEvent(dbName, telemetryEvent, AnalystSchema, logInterviewAnalystAPIPostRequest);

    var obj = {
        "analystId": req.query.analystId,
        "userDocumentId": req.query.analystUserDocumentId,
        "analysisDocumentId": req.query.analysisDocumentId,
        "name": req.query.analystName,
        "email": req.query.analystEmail,
        "phone": req.query.analystPhone,
        "role": req.query.analystRole,
        "availability": req.query.analystAvailability,
        "industry": req.query.analystIndustry,
        "dateAdded": req.query.analystDateAdded,
        "isActive": req.query.analystIsActive
    }

    console.log(obj);

    var analyst = DbOperation('New', dbName, "Analyst", AnalystSchema, obj)
                    .then(newAnalyst => res.status(200).send({ "valid": true, "object": "analyst", "data": JSON.stringify(newAnalyst) }))
                    .catch(e => res.status(400).send({ "valid": false, "object": "analyst", "data": e.toString() }));
});

InterviewRouter.get('/interview/analyst', (req, res) => { 
    let log = LogEvent(dbName, telemetryEvent, AnalystSchema, logInterviewAnalystAPIGetRequest);

    var obj = { "isValid": true }

    console.log(obj);

    var analyst = DbOperation('Get All', dbName, "Analyst", AnalystSchema, obj)
                    .then(results => res.status(200).send({ "valid": true, "object": "analyst", "data": JSON.stringify(results) }))
                    .catch(e => res.status(400).send({ "valid": false, "object": "analyst", "data": e.toString() }));
});

InterviewRouter.patch('/interview/analyst', (req, res) => { 
    let log = LogEvent(dbName, telemetryEvent, AnalystSchema, logInterviewAnalystAPIPatchRequest);

    var obj = {
        searchRecordId: { "_id": req.query.interviewAnalystDocumentId},
        updateObj: {
            "analystId": req.query.analystDocumentId,
            "userDocumentId": req.query.analystUserDocumentId,
            "analysisDocumentId": req.query.analysisDocumentId,
            "name": req.query.analystName,
            "email": req.query.analystEmail,
            "phone": req.query.analystPhone,
            "role": req.query.analystRole,
            "availability": req.query.analystAvailability,
            "industry": req.query.analystIndustry,
            "dataAdded": req.query.analystDateAdded,
            "isActive": req.query.analystIsActive
        }
    }

    console.log(obj);

    var analyst = DbOperation('Update By Value', dbName, "Analyst", AnalystSchema, obj)
                    .then(results => res.status(200).send({ "valid": true, "object": "analyst", "data": JSON.stringify(results) }))
                    .catch(e => res.status(400).send({ "valid": false, "object": "analyst", "data": e.toString() }));
});

InterviewRouter.post('/interview/schedule', (req, res) => {

    let log = LogEvent(dbName, telemetryEvent, ScheduleSchema, logInterviewScheduleAPIPostRequest )

    var obj = {
        "interviewScheduleId": req.query.interviewScheduleId,
        "interviewDocumentId": req.query.interviewDocumentId,
        "interviewSchedules": req.query.interviewSchedules,
        "interviewScheduleIsActive": req.query.interviewScheduleIsActive
    };

    console.log(obj)

    var schedule = DbOperation('New', dbName, "Interview Schedule", ScheduleSchema, obj)
                    .then(newSchedule => res.status(200).send({ "valid": true, "object": "interview schedule", "data": JSON.stringify(newSchedule) }))
                    .catch(e => res.status(400).send({ "valid": false, "object": "interview schedule", "data": e.toString() }));
});

InterviewRouter.get('/interview/schedule', (req, res) => {

    let log = LogEvent(dbName, telemetryEvent, ScheduleSchema, logInterviewScheduleAPIGetRequest )

    var obj = { "isValid": true };

    console.log(obj)

    var schedule = DbOperation('Get All', dbName, "Interview Schedule", InterviewSchema, obj)
                    .then(results => res.status(200).send({ "valid": true, "object": "interview schedule", "data": JSON.stringify(results) }))
                    .catch(e => res.status(400).send({ "valid": false, "object": "interview schedule", "data": e.toString() }));
});

InterviewRouter.patch('/interview/schedule', (req, res) => {

    let log = LogEvent(dbName, telemetryEvent, ScheduleSchema, logInterviewScheduleAPIPatchRequest )

    var obj = {
        searchRecordId: { "_id": req.query.interviewScheduleDocumentId },
        updateObj: {
            "interviewScheduleId": req.query.interviewScheduleId,
            "interviewDocumentId": req.query.interviewDocumentId,
            "interviewSchedules": req.query.interviewSchedules,
            "interviewScheduleIsActive": req.query.interviewScheduleIsActive
        }
    };

    console.log(obj)

    var schedule = DbOperation('Update By Value', dbName, "Interview Schedule", InterviewSchema, obj)
                    .then(results => res.status(200).send({ "valid": true, "object": "interview schedule", "data": JSON.stringify(results) }))
                    .catch(e => res.status(400).send({ "valid": false, "object": "interview schedule", "data": e.toString() }));
});

InterviewRouter.post('/interview/review', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, ReviewSchema, logInterviewReviewAPIPostRequest);

    var obj = { 
        "reviewId": req.query.reviewId,
        "interviewDocumentId": req.query.interviewDocumentId,
        "name": req.query.reviewName,
        "description": req.query.reviewDescription,
        "items": req.query.reviewItem,
        "decision": req.query.reviewDecision,
        "createdDate": req.query.reviewCreatedDate,
        "completedDate": req.query.reviewCompletedDate,
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
            "decision": req.query.reviewDecision,
            "createdDate": req.query.reviewCreatedDate,
            "completedDate": req.query.reviewCompletedDate,
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