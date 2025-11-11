import express from 'express';
import DbOperation from '../../dboperation/DbOperation.js';
import { TelemetryEventSchema } from '../../models/telemetry/TelemetryEventModel.js';
import { MetricSchema } from '../../models/metrics/MetricModel.js';

let dbName = "AGTest";
let dbModel = "Telemetry Event";
let schema = TelemetryEventSchema;

const TelemetryEventRouter = express.Router();

TelemetryEventRouter.post('/telemetry/event', (req, res) => {
    let obj = {
        "logId": req.query.logId,
        "name": req.query.name,
        "type": req.query.type,
        "subType": req.query.subType,
        "eventDate": req.query.eventDate,
        "logTime": req.query.logTime,
        "process": req.query.process
    };

    let event = DbOperation('New', dbName, dbModel, schema, obj)
                    .then(newEvent => res.status(200).send({ "valid": true, "object": 'telemetry event', "data": json.stringify({ newEvent })}))
                    .catch(e => res.status(400).send({ "valid": false, "object": 'telemetry event', "data": e.toString() }));
});

TelemetryEventRouter.get('/telemetry/event', (req, res) => {
    let obj = { isActive: true };
    
    let event = DbOperation('Get All', dbName, dbModel, schema, obj)
                .then(events => res.status(200).send({ "valid": true, "object": 'telemetry event', "data": json.stringify({ events })}))
                .catch(e => res.status(400).send({ "valid": false, "object": 'telemetry event', "data": e.toString() }));
});

TelemetryEventRouter.patch('/telemetry/event', (req, res) => {
    let obj = {
        searchRecordId: { _id: req.query.eventDocumentId },
        updateObj: {
            "logId": req.query.logId,
            "name": req.query.name,
            "type": req.query.type,
            "subType": req.query.subType,
            "eventDate": req.query.eventDate,
            "logTime": req.query.logTime,
            "process": req.query.process
        }
    };

    let event = DbOperation('Update By Value', dbName, dbModel, schema, obj)
                .then(results => res.status(200).send({ "valid": true, "object": 'telemetry event', "data": json.stringify({ results })}))
                .catch(e => res.status(400).send({ "valid": false, "object": 'telemetry event', "data": e.toString() }));

});

TelemetryEventRouter.post('/telemetry/metric', (req, res) => {
    let obj = {
        "metricId": req.query.metricId,
        "name": req.query.name,
        "description": req.query.description,
        "calculation": req.query.calculation,
        "isActive": req.query.isActive
    };

    let metric = DbOperation('New', dbName, 'Metric', MetricSchema, obj)
                .then(newMetric => res.status(200).send({ "valid": true, "object": 'metric', "data": json.stringify({ newMetric })}))
                .catch(e => res.status(400).send({ "valid": false, "object": 'metric', "data": e.toString() }));
});

TelemetryEventRouter.get('/telemetry/metric', (req, res) => {
    let obj = { isActive: true };

    let metrics = DbOperation('Get All', dbName, 'Metric', MetricSchema, obj)
                .then(metrics => res.status(200).send({ "valid": true, "object": 'telemetry event', "data": json.stringify({ metrics })}))
                .catch(e => res.status(400).send({ "valid": false, "object": 'telemetry event', "data": e.toString() }));
});

TelemetryEventRouter.patch('/telemetry/metric', (req, res) => {
    let obj = {
        "searchRecordId": { "_id": req.query.searchRecordId },
        "updateObj": {
            "metricId": req.query.metricId,
            "name": req.query.name,
            "description": req.query.description,
            "calculation": req.query.calculation,
            "isActive": req.query.isActive
        }
    };

    let metric = DbOperation('Update By Value', dbName, 'Metric', MetricSchema, obj)
                .then(results => res.status(200).send({ "valid": true, "object": 'telemetry event', "data": json.stringify({ results })}))
                .catch(e => res.status(400).send({ "valid": false, "object": 'telemetry event', "data": e.toString() }));
});

export default TelemetryEventRouter;