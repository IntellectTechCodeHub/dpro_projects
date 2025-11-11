import mongoose from 'mongoose';

export const TelemetryEventSchema = mongoose.Schema({
    logId: {
        type: String,
        required: true,
        message: 'logId is required.'
    },
    name: {
        type: String,
        required: true,
        message: 'name is required.'
    },
    type: {
        type: String,
        required: true,
        message: 'type is required.'
    },
    subType: {
        type: String,
        required: true,
        message: 'subType is required.'
    },
    eventDate: {
        type: Date,
        required: true,
        message: 'eventDate is required.'
    },
    logTime: {
        type: String,
        required: true,
        message: 'logTime is required.'
    },
    process: {
        type: String,
        required: true,
        message: 'process is required.'
    }
});

const TelemetryEvent = mongoose.model('TelemetryEvent', TelemetryEventSchema);
export default TelemetryEvent;