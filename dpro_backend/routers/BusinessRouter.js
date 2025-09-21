import express from 'express';
import DbOperation from '../dboperation/DbOperation.js';
import { BusinessSchema } from '../models/BusinessModel.js';

var dbName = 'AGTest';
var modelName = 'Business';
var schema = BusinessSchema;

const BusinessRouter = express.Router();

BusinessRouter.post('/business', (req, res) => {

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

BusinessRouter.get('/business', (req, res) => {
    var obj = { "isActive": true };

    var businesses = DbOperation('Get All', dbName, modelName, schema, obj)
                        .then(businesses => res.status(200).send({ "valid": true, "object": "business", "data": JSON.stringify({ businesses })}))
                        .catch(e => res.status(400).send({ "valid": false, "object": "business", "data": e.toString() }));
});

BusinessRouter.patch('/business', (req, res) => {

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