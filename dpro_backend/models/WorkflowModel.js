import mongoose from "mongoose";
export const WorkflowSchema = mongoose.Schema({
    workflowId: {
        type: String,
        required: true,
        message: 'workflowId is required.'
    },
    businessDocumentId: {
        type: String,
        required: true,
        message: 'businessDocumentId is required.'
    },
    workflowName: {
        type: String,
        required: true,
        message: 'workflowName is required.'
    },
    workflowDescription: {
        type: String,
        required: true,
        message: 'workflowDescription is required.'
    },
    processName: {
        type: String,
        required: true,
        message: 'processName is required.'
    },
    processDescription: { 
        type: String,
        required: true,
        message: 'processDescription is required.'
    },
    processCreatedDate: {
        type: Date,
        required: true,
        message: 'processCreatedDate is required.'
    },
    processIsActive: {
        type: Boolean,
        required: true,
        message: 'processIsActive is required.'
    },
    actionData: {
        type: Boolean,
        required: false
    },
    actionDecision: {
        type: Boolean,
        required: true,
        message: 'actionDecision is required.'
    },
    actionMeeting: {
        type: Boolean,
        required: true,
        message: 'actionMeeting is required.'
    },
    actionFiling: {
        type: Boolean,
        required: true,
        message: 'actionFiling is required.'
    },
    actionPhone: {
        type: Boolean,
        required: true,
        message: 'actionPhone is required.'
    },
    actionMessage: {
        type: Boolean,
        required: true,
        message: 'actionMessage is required.'
    },
    policies: Array
});

const Workflow = mongoose.model('Workflow', WorkflowSchema);
export default Workflow;