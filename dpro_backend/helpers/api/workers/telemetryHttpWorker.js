'use strict';

//import libraries
import { parentPort, workerData } from "worker_threads";
import DbOperation from "../../../dboperation/DbOperation.js";
import { TelemetryEventSchema } from "../../../models/telemetry/TelemetryEventModel.js";

const HttpWorker = async (dbInfo) => {

    console.log('HttpWorker start');

    const result = await DbOperation(dbInfo.operation, dbInfo.db, dbInfo.model, TelemetryEventSchema, dbInfo.values)
                    .then(result => {
                        JSON.stringify({result});
                        console.log("Result: " + result );
                    })
                    .catch(e => {
                        console.log(e.toString());
                        return e.toString();
                    });

    console.log("dbOperation: " +  dbInfo.operation );

    return result;
}

const httpRequest = await HttpWorker(workerData);

parentPort.postMessage(httpRequest);