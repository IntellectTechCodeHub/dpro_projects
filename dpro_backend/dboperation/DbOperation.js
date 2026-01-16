'use strict';

// import library
import mongoose from "mongoose";
import fs from 'node:fs';
import { env } from "node:process";
import { PollingDelay } from "../helpers/api/PollingDelay.js";

let dataErr, retrieveSecretError, retrieveSecretTokenError;
let hasSentSecretApiToken, hasSentSecretApi, hasSecretToken, hasSecret, hasError = false;

const retrieveSecret = async () => {
    console.log('begin secret api');
        try {
            hasSentSecretApi = true;
            const myHeaders = new Headers();
            
            myHeaders.append("X-Vault-Namespace", secretManagerNamespace);
            myHeaders.append("X-Vault-Token", appToken ? appToken : secretManagerAppToken);

            const requestOptions = {
              method: "GET",
              headers: myHeaders,
              redirect: "follow"
            };
            
            let httpRequest = await fetch(secretManagerAuthUrl, requestOptions)
                .then((response) => response.json())
                .then((result) => result.data.data)
                .then((final) => {
                    uri = process.env.DB_BASE_URL + final.DbUsername + ':' + final.DbPassword + process.env.DB_CLUSTER_URL;
                })
              .catch((error) => console.error(error));
        }
        catch(error) {
            hasError = true;
            dataErr = error;
            retrieveSecretError = error.message;
        }
}

export const getSecret = async () => {
    console.log('retrieve secret');
    if(!hasSentSecretApi && process.env.SECRET_API){
        let secret = await retrieveSecret();
        return secret;
    }
}

export const checkDbCredentials = async () => {
     // db auth credentials
    let hasExpiredAppToken = false; //calculate the time duration since last secret refresh
    let hasAppToken = async () => {
        if(hasExpiredAppToken){
            if(process.env.SECRET_MANAGER_LOGIN_API){
                await getAppRoleCredential().then(() => { console.log('token refresh'); });
            }
        }
        return hasExpiredAppToken;
    }
    
    await hasAppToken().then( () => console.log('app token in progress')).then( () => {console.log('app token complete'); hasExpiredAppToken = false;} );
}

const secretManagerNamespace = process.env.SECRET_MANAGER_NAMESPACE;
const secretManagerAppToken = process.env.SECRET_MANAGER_APP_TOKEN;
const secretManagerAuthUrl = process.env.SECRET_API;

let appToken, uri;

let secret = getSecret();
await secret;
secret.then(async () => {
    console.log('secret complete');
});

// dbOperation

const filePath = '../dpro data samples/data samples/model collection mapping.json';

function readDataFile() {
    const dataInput = fs.readFileSync(filePath, 'utf8');
    const inputValues = JSON.parse(dataInput);
    return inputValues;
}

const DbOperation = async (operation, db, model, schema, values) => {
    
    let returnValue;

    while(uri === undefined || uri === null){
        PollingDelay(100);
        
        if(uri){
            console.log('db operation 2');
            break;
        } 
    }

    dataOperation();

    async function dataOperation() {
        // connection options
        const optionsMongoDb = {
            tls: true,
            serverApi: { version: '1', strict: true, depreciationErrors: true }
        };
        
        try{
            mongoose.connection.on('connected', () => { console.log('Connection successful to MongoDB cluster.'); });
            mongoose.connection.on('disconnecting', () => { console.log('Disconnecting from MongoDB cluster.'); });
            mongoose.connection.on('disconnected', () => { console.log('Disconnected from MongoDB cluster.'); });
        
            // create Mongoose client connection with MongoDBClientOptions to set Stable API version.
            await mongoose.connect(uri, optionsMongoDb);
            
            mongoose.model(model, schema);
            
            const dbConn = mongoose.connection.useDb(db, { useCache: true })
            
            mongoose.connection.db.admin().command({ ping: 1 });
            
            console.log('Pinged deployment.');
        
            console.log('DB Name: ' + dbConn.name);
        
            const dbModel = dbConn.model(model, schema);
            
            var collectionMappings = readDataFile();
            var collectionNames = collectionMappings['collection_mappings'];
            var collectionName;
            for(var i = 0; i < collectionNames.length - 1; i++ ) {
                if(collectionNames[i].model == model) {
                    collectionName = collectionNames[i].collection;
                }
            }
        
            var collection = await dbConn.collection(collectionName);
        
            if(!collection || collection == undefined)
                await dbModel.createCollection().then(console.log('Users collection created'));
        
            console.log(dbConn.models);    
            
            switch(operation) {
                case "New":
            
                    try {
                        var newRecord = dbModel.create(values).then(console.log(model + ' added in ' + db + '.' + model + ' collection.')); 
                        await newRecord;
                        console.log(newRecord);
                        newRecord.then(record => returnValue = JSON.stringify(record));
                    }
                    catch(e) {
                        returnValue = e;
                        console.log(e);
                    }
                
                    break;
                
                case "Get All":
                    try {
                    
                        var allRecords = dbModel.find().then(console.log('All records in ' + db + '.' + model + ' collection.'));
                        await allRecords;
                        console.log(allRecords);
                        allRecords.then(records => returnValue = JSON.stringify(records));
                    
                    } 
                    catch(e) {
                        returnValue = e;
                        console.log(e);
                    }
                
                    break;
                    
                case "Get All By Value":
                    try {
                    
                        var allRecordsByValue = dbModel.find(values).then(console.log('All records in ' + db + '.' + model + ' collection with values.'));
                        await allRecordsByValue;
                        console.log(allRecordsByValue);
                        allRecordsByValue.then(records => returnValue = JSON.stringify(records));
                    
                    } 
                    catch(e) {
                        returnValue = e;
                        console.log(e);
                    }
                
                    break;
                
                case "Update By Value":
                    try {
                        
                        var filter = values.searchRecordId;
                        var optionsUpdate = { "upsert": true };
                        var updateRecordByValue = dbModel.updateOne(filter, { $set: values.updateObj }, optionsUpdate).then(console.log('All records in ' + db + '.' + model + ' collection with values.'));
                        await updateRecordByValue;
                        console.log(updateRecordByValue);
                        updateRecordByValue.then(result => returnValue = JSON.stringify(result));
                    
                    } 
                    catch(e) {
                        returnValue = e;
                        console.log(e);
                    }
                
                    break;
                
                case "Delete By Value":
                    try {
                    
                        var filter = values.searchUserId.userId === undefined ? values.searchRecordId : values.searchUserId;
                        var deleteRecordByValue = dbModel.deleteOne(filter).then(console.log('All records in ' + db + '.' + model + ' collection with values.'));
                        await deleteRecordByValue;
                        console.log(deleteRecordByValue);
                        deleteRecordByValue.then(result => returnValue = JSON.stringify(result));
                    
                    } 
                    catch(e) {
                        returnValue = e;
                        console.log(e);
                    }
                
                    break;
                
                default:
                
            }
        }
        catch(e) {
            console.log(e);
        }
        finally {
            await mongoose.disconnect();
            return returnValue;
        }
    }
}

export default DbOperation;