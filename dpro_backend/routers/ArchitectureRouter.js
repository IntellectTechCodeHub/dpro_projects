import express from 'express';
import DbOperation from '../dboperation/DbOperation.js';
import { ArchitectureSchema } from '../models/architecture/ArchitectureModel.js';
import { DataFlowSchema } from '../models/architecture/DataFlowModel.js';
import { DataCatalogSchema } from '../models/architecture/DataCatalogModel.js';
import { DataSourceSchema } from '../models/architecture/DataSourceModel.js';
 
var dbName = 'AGTest';
var modelName = 'Architecture';
var schema = ArchitectureSchema;

const ArchitectureRouter = express.Router();

ArchitectureRouter.post('/architecture', (req, res) => {
    var obj = {
        "architectureId": req.query.architectureId,
        "businessId": req.query.businessDocumentId,
        "description": req.query.architectureDescription,
        "techStack": req.query.architectureTechStack,
        "cloudPlatforms": req.query.architectureCloudPlatforms,
        "createdDate": req.query.architectureCreatedDate,
        "isActive": req.query.architectureIsActive
    };

    var architecture = DbOperation('New', dbName, modelName, schema, obj)
                            .then(newArchitecture => res.status(200).send({ "valid": true, "object": "data source", "data": JSON.stringify(newArchitecture) }))
                            .catch(e => res.send(400).send({ "valid": false, "object": "data source", "data": e.toString() }));
});

ArchitectureRouter.post('/architecture/dataflow', (req, res) => {
    var obj = {
        "dataflowId": req.query.dataflowId,
        "architectureId": req.query.architectureDocumentId,
        "name": req.query.dataflowName,
        "description": req.query.dataflowDescription,
        "stages": req.query.dataflowStage,
        "createdDate": req.query.dataflowCreatedDate,
        "isActive": req.query.dataflowIsActive,
        "catalogs": req.query.dataflowCatalog,
        "sources": req.query.dataflowSources
    };

    var dataFlow = DbOperation('New', dbName, 'Data Flow', DataFlowSchema, obj)
                            .then(newDataFlow => res.status(200).send({ "valid": true, "object": "data flow", "data": JSON.stringify(newDataFlow) }))
                            .catch(e => res.send(400).send({ "valid": false, "object": "data flow", "data": e.toString() }));
});

ArchitectureRouter.post('/architecture/dataflow/datacatalog', (req, res) => {
    var obj = {
        "catalogId": req.query.catalogId,
        "name": req.query.catalogName,
        "createdDate": req.query.catalogCreatedDate,
        "isActive": req.query.catalogIsActive,
        "dictionaries": req.query.catalogDictionary
    };

    var catalog = DbOperation('New', dbName, 'Data Catalog', DataCatalogSchema, obj)
                            .then(newDataCatalog => res.status(200).send({ "valid": true, "object": "data catalog", "data": JSON.stringify(newDataCatalog) }))
                            .catch(e => res.send(400).send({ "valid": false, "object": "data catalog", "data": e.toString() }));
});

ArchitectureRouter.post('/architecture/dataflow/datasource', (req, res) => {
    var obj = {
        "dataSourceId": req.query.dataSourceId,
        "name": req.query.dataSource.dataSourceName,
        "dataLineage": req.query.dataSourceDataLineage,
        "dataStorage": req.query.dataSourceDataStorage,
        "fileType": req.query.dataSourceFileType,
        "createdDate": req.query.dataSourceCreatedDate,
        "isActive": req.query.dataSourceIsActive,
        "dataFlowId": req.query.dataflowDocumentId,
        "models": req.query.dataSourceModel
    };

    var source = DbOperation('New', dbName, 'Data Source', DataSourceSchema, obj)
                            .then(newDataSource => res.status(200).send({ "valid": true, "object": "data source", "data": JSON.stringify(newDataSource) }))
                            .catch(e => res.send(400).send({ "valid": false, "object": "data source", "data": e.toString() }));
});

export default ArchitectureRouter;