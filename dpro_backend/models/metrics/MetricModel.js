import mongoose from "mongoose";

export const MetricSchema = mongoose.Schema({
    metricId: {
        type: String,
        required: true,
        message: 'metricId is required.'
    },
    name: {
        type: String,
        required: true,
        message: 'name is required.'
    },
    description: {
        type: String,
        required: true,
        message: 'description is required.'
    },
    calculation: {
        type: String,
        required: true,
        message: 'calculation is required.'
    },
    isActive: {
        type: Boolean,
        requi4red: true,
        message: 'isActive is required.'
    }
});

const MetricModel = mongoose.model('Metric', MetricSchema);
export default MetricModel;