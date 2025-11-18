import express from 'express';
import DbOperation from '../dboperation/DbOperation.js';
import { AnalysisSchema } from '../models/analysis/AnalysisModel.js';
import { ProblemSchema } from '../models/analysis/ProblemModel.js';
import { SolutionSchema } from '../models/analysis/SolutionModel.js';
import AnalysisController from '../controllers/AnalysisController.js';
import { LogEvent } from '../helpers/api/logger/logEvent.js';
import { testDbName, telemetryEvent, logAnalysisAPIPostRequest, logAnalysisAPIGetRequest, logAnalysisAPIPatchRequest } from '../config/constants.js';
import { logAnalysisProblemAPIPostRequest, logAnalysisProblemAPIGetRequest, logAnalysisProblemAPIPatchRequest } from '../config/constants.js';
import { logAnalysisSolutionAPIPostRequest, logAnalysisSolutionAPIGetRequest, logAnalysisSolutionAPIPatchRequest } from '../config/constants.js';
import { logAnalysisAPIPostRequestValue } from '../config/constants.js';
const AnalysisRouter = express.Router();

var dbName = testDbName;
var modelName = 'Analysis';
var schema = AnalysisSchema;

AnalysisRouter.post('/analysis', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, schema, logAnalysisAPIPostRequest);

    var obj = { 
        "analysisId": req.query.analysisId,
        "name": req.query.name,
        "workflowId": req.query.workflowDocumentId,
        "requestorId": req.query.requestorId,
        "analystId": req.query.analystId,
        "scheduledDate": req.query.scheduledDate,
        "createdDate": req.query.createdDate,
        "completedDate": req.query.completedDate,
        "status": req.query.status,
        "isActive": req.query.isActive,
        "problems": [
            {
                "problemId": req.query.problemId,
                "analysisId": req.query.analysisId,
                "name": req.query.problemName,
                "description": req.query.problemDescription,
                "suggestions": req.query.suggestions,
                "createdDate": req.query.problemCreatedDate,
                "isResolved": req.query.problemIsResolved,
                "isActive": req.query.problemIsActive
           }
        ],
        "solutions": [
            {
                "solutionId": req.query.solutionId,
                "problemId": req.query.problemDocumentId,
                "analysisId": req.query.analysisDocumentId,
                "name": req.query.solutionName,
                "description": req.query.solutionDescription,
                "items": [],
                "createdDate": req.query.solutionCreatedDate,
                "completedDate": req.query.solutionCompletedDate,
                "isComplete": req.query.solutionIsComplete,
                "isActive": req.query.solutionIsActive
            }
        ]
    };

    var analysis = DbOperation('New', dbName, modelName, schema, obj)
                                .then(newAnalysis => res.status(200).send({ "valid": true, "object": "analysis", "data": JSON.stringify({newAnalysis}) }))
                                .catch(e => res.status(400).send({ "valid": false, "object": "analysis", "data": e.toString() }));

    //let logDbOperation = LogEvent(dbName, telemetryEvent, schema, logAnalysisAPIPostRequestValue(analysis));
    });
 
AnalysisRouter.get('/analysis', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, schema, logAnalysisAPIGetRequest);

    var obj = { "isValid": true };

    var analyses = DbOperation("Get All", dbName, modelName, schema, obj)
                                .then( analyses => res.status(200).send({ "valid": true, "object": "analysis", "data": JSON.stringify({analyses}) }))
                                .catch( e => res.status(400).send({ "valid": false, "object": "analysis", "data": e.toString() }));

});

AnalysisRouter.patch('/analysis', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, schema, logAnalysisAPIPatchRequest);

    var obj = AnalysisController("Update Analysis", req.query);

    var analysis = DbOperation('Update By Value', dbName, "Analysis", schema, obj)
                                   .then(results => res.status(200).send({ "valid": true, "object": "analysis", "data":  JSON.stringify({results})}))
                                   .catch(e => res.status(400).send({ "valid": false, "object": "analysis", "data": e.toString() }));
});

AnalysisRouter.post('/analysis/problem', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, ProblemSchema, logAnalysisProblemAPIPostRequest);

    var obj = {
        "problemId": req.query.problemId,
        "analysisId": req.query.analysisDocumentId,
        "name": req.query.problemName,
        "description": req.query.problemDescription,
        "suggestions": req.query.problemSuggestions,
        "createdDate": req.query.problemCreatedDate,
        "isResolved": req.query.problemIsResolved,
        "isActive": req.query.problemIsActive
    };

    var problem = DbOperation('New', dbName, "Problem", ProblemSchema, obj)
                                    .then(newProblem => res.status(200).send({ "valid": true, "object": "problem", "data":  JSON.stringify({newProblem})}))
                                    .catch(e => res.status(400).send({ "valid": false, "object": "problem", "data": e.toString() }));
    });

AnalysisRouter.get('/analysis/problem', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, ProblemSchema, logAnalysisProblemAPIGetRequest);
   
    var obj = { "isValid": true };

    var problems = DbOperation("Get All", dbName, 'Problems', ProblemSchema, obj)
                                .then( problems => res.status(200).send({ "valid": true, "object": "problem", "data": JSON.stringify({problems}) }))
                                .catch( e => res.status(400).send({ "valid": false, "object": "problem", "data": e.toString() }));

});

AnalysisRouter.patch('/analysis/problem', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, ProblemSchema, logAnalysisProblemAPIPatchRequest);

    var obj = {
        searchRecordId: { "_id": req.query.problemDocumentId },
        updateObj: {
            "problemId": req.query.problemDocumentId,
            "analysisId": req.query.analysisDocumentId,
            "name": req.query.problemName,
            "description": req.query.problemDescription,
            "suggestions": req.query.problemSuggestions,
            "createdDate": req.query.problemCreatedDate,
            "isResolved": req.query.problemIsResolved,
            "isActive": req.query.problemIsActive
        }
    };

    var problem = DbOperation('Update By Value', dbName, "Problem", ProblemSchema, obj)
                                    .then(results => res.status(200).send({ "valid": true, "object": "problem", "data":  JSON.stringify({results})}))
                                    .catch(e => res.status(400).send({ "valid": false, "object": "problem", "data": e.toString() }));
    });

AnalysisRouter.post('/analysis/problem/solution', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, SolutionSchema, logAnalysisSolutionAPIPostRequest);

    var obj = {
        "solutionId": req.query.solutionId,
        "problemId": req.query.problemDocumentId,
        "analysisId": req.query.analysisDocumentId,
        "name": req.query.solutionName,
        "description": req.query.solutionDescription,
        "items": [],
        "createdDate": req.query.solutionCreatedDate,
        "completedDate": req.query.solutionCompletedDate,
        "isComplete": req.query.solutionIsComplete,
        "isActive": req.query.solutionIsActive
    };

    var solution = DbOperation('New', dbName, 'Solution', SolutionSchema, obj)
                                    .then(newSolution => res.status(200).send({ "valid": true, "object": "solution", "data":  JSON.stringify({newSolution})}))
                                    .catch(e => res.status(400).send({ "valid": false, "object": "solution", "data": e.toString() }));
});

AnalysisRouter.get('/analysis/problem/solution', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, SolutionSchema, logAnalysisSolutionAPIGetRequest);
   
    var obj = { "isValid": true };

    var solutions = DbOperation("Get All", dbName, 'Solution', SolutionSchema, obj)
                                .then( solutions => res.status(200).send({ "valid": true, "object": "solution", "data": JSON.stringify({solutions}) }))
                                .catch( e => res.status(400).send({ "valid": false, "object": "solution", "data": e.toString() }));

});

AnalysisRouter.patch('/analysis/problem/solution', (req, res) => {
    let log = LogEvent(dbName, telemetryEvent, SolutionSchema, logAnalysisSolutionAPIPatchRequest);

    var obj = {
        searchRecordId: { "_id": req.query.solutionDocumentId },
        updateObj: {
            "solutionId": req.query.solutionId,
            "name": req.query.solutionName,
            "description": req.query.solutionDescription,
            "items": [],
            "createdDate": req.query.solutionCreatedDate,
            "completedDate": req.query.solutionCompletedDate,
            "isComplete": req.query.solutionIsComplete,
            "isActive": req.query.solutionIsActive
        }
    };

    var updatedSolution;

    var solution = DbOperation('Update By Value', dbName, 'Solution', SolutionSchema, obj)
                                    .then(solution => {
                                        updatedSolution = solution;
                                        res.status(200).send({ "valid": true, "object": "solution", "data":  JSON.stringify({solution})})})
                                    .catch(e => res.status(400).send({ "valid": false, "object": "solution", "data": e.toString() }));
});

export default AnalysisRouter;