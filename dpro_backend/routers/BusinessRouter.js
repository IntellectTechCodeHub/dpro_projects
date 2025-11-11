import express from 'express';
import DbOperation from '../dboperation/DbOperation.js';
import { BusinessSchema } from '../models/BusinessModel.js';
import { testDbName, telemetryEvent, logBusinessAPIPostRequest, logBusinessAPIGetRequest, logBusinessAPIPatchRequest} from '../config/constants.js';
import { LogEvent } from '../helpers/api/logger/logEvent.js';
import { startHttpWorker } from '../helpers/api/workers/startHttpWorker.js';

var dbName = testDbName;
var modelName = 'Business';
var schema = BusinessSchema;

const BusinessRouter = express.Router();

BusinessRouter.post('/business', (req, res) => {
        let log = LogEvent(testDbName, telemetryEvent, schema, logBusinessAPIPostRequest);

        var obj = {
            "businessId": req.query.businessId,
            "name": req.query.businessName,
            "description": req.query.businessDescription,
            "createdDate": req.query.businessCreatedDate,
            "isActive": req.query.businessIsActive,
            "industries": req.query.businessIndustry
        }; 

        var business = DbOperation('New', dbName, modelName, schema, obj)
                        .then(newBusiness => res.status(200).send({ "valid": true, "object": "business", "data": JSON.stringify({ newBusiness })}))
                        .catch(e => res.status(400).send({ "valid": false, "object": "business", "data": e.toString() }));
});

BusinessRouter.get('/business', async (req, res) => {
    let log = LogEvent(testDbName, telemetryEvent, schema, logBusinessAPIGetRequest);

    var obj = { "isActive": true };

    var businesses = await startHttpWorker('Get All', dbName, modelName, schema, obj);
    
    businesses.then(businesses => { 
        console.log("Get All - " + JSON.stringify(businesses));
        res.status(200).send({ "valid": true, "object": "business", "data": JSON.stringify({ businesses })});
        
    })
    .catch(e => {
        console.log("Get All Error - " + JSON.stringify(e));
        res.status(400).send({ "valid": false, "object": "business", "data": e.toString() });
    
    });
});

BusinessRouter.patch('/business', (req, res) => {
    let log = LogEvent(testDbName, telemetryEvent, logBusinessAPIPatchRequest);
    
    var obj = {
        searchRecordId: { "_id": req.query.businessDocumentId },
        updateObj: {
            "businessId": req.query.businessId,
            "name": req.query.businessName,
            "description": req.query.description,
            "createdDate": req.query.businessCreatedDate,
            "isActive": req.query.businessIsActive,
            "industries": req.query.businessIndustry
        }
    };

    var business = DbOperation('Update By Value', dbName, modelName, schema, obj)
                        .then(results => res.status(200).send({ "valid": true, "object": "business", "data": JSON.stringify({ results })}))
                        .catch(e => res.status(400).send({ "valid": false, "object": "business", "data": e.toString() }));

});

export default BusinessRouter;