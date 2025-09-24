import mongoose from "mongoose";

export const AnalysisSchema = mongoose.Schema({
    analysisId: {
        type: String,
        required: true,
        message: 'analysisId is required.'
    },
    workflowId: {
        type: String,
        required: true,
        message: 'workflowId is required.'
    },
    name: {
        type: String,
        required: true,
        message: 'name is required.'
    },
    requestorId: {
        type: String,
        required: true,
        message: 'requestorId is required.'
    },
    analystId: {
        type: String,
        required: true,
        message: 'analystId is required.'
    },
    scheduledDate: {
        type: Date,
        required: true,
        message: 'scheduledDate is required.'
    },
    createdDate: {
        type: Date,
        required: true,
        message: 'createdDate is required.'
    },
    completedDate: {
        type: Date,
        required: true,
        message: 'completedDate is required.'
    },
    status: {
        type: String,
        required: true,
        message: 'status is required.'
    },
    isActive: {
        type: Boolean,
        required: true,
        message: 'isActive is required.'
    },
    problems: [ 
        {
            problemId: {
                type: String,
                required: true,
                message: 'problemId is required.'
            },
            analysisId: {
                type: String,
                required: true,
                message: 'analysisId is required.' 
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
            suggestions: {
                type: Array,
                required: true,
                message: 'suggestions is required.'
            },
            createdDate: {
                type: Date,
                required: true,
                message: 'createdDate is required.'
            },
            isResolved: {
                type: Boolean,
                required: true,
                message: 'isResolved is required.'
            },
            isActive: {
                type: Boolean,
                required: true,
                message: 'isActive is required.'
            }
        }
    ]
});

const Analysis = mongoose.model('Analysis', AnalysisSchema);
export default Analysis;