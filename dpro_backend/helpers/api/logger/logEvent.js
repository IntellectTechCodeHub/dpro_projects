import DbOperation from "../../../dboperation/DbOperation.js";
import { startTelemetryHttpWorker } from "../workers/startTelemetryHttpWorker.js";

export const LogEvent = async (db, model, schema, data) => {
    let returnValue = await startTelemetryHttpWorker ('New', db, model, schema, data)
                        .then(newEvent => ({ "valid": true, "object": 'telemetry event', "data": JSON.stringify({ newEvent })}))
                        .catch(e => ({ "valid": false, "object": 'telemetry event', "data": e.toString() }));
    
    console.log('Telemetry event logged:');
    console.log(returnValue);
    
    return returnValue;   
}