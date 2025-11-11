import { Worker } from 'worker_threads';

export const startHttpWorker = (op, name, model, schema, data) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./helpers/api/workers/businessHttpWorker.js', {
            workerData: { operation: op, db: name, model: model, values: data }
        });

        worker.on('message', (dataObj) => {
            resolve(dataObj);
        });
        worker.on('error', (err) => {
            console.log('Error message: ' + { err });
            reject(new Error('Error message: ' + { err }))
        });
        worker.on('exit', (err) => {
            console.log('worker complete');
        });
    });
}