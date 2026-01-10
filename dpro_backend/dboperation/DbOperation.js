// import library
import mongoose from "mongoose";
import fs from 'node:fs';

const filePath = '../dpro data samples/data samples/model collection mapping.json';

function readDataFile() {
    const dataInput = fs.readFileSync(filePath, 'utf8');
    const inputValues = JSON.parse(dataInput);
    return inputValues;
}

const DbOperation = async (operation, db, model, schema, values) => {

    var returnValue;

    // connection string
    const uri = 'mongodb+srv://' + process.env.DbUsername + ':' + process.env.DbPassword +'@oasisdbcluster.xg80xyk.mongodb.net/?appName=OasisDBCluster';

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

export default DbOperation;