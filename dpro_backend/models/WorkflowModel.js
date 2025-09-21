import mongoose from "mongoose";

export const WorkflowSchema = mongoose.Schema({
    workflowId: {
        type: String,
        required: true,
        message: 'workflowId is required.'
    },
    businessId: {
        type: String,
        required: true,
        message: 'businessId is required.'
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
    createdDate: {
        type: Date,
        required: true,
        message: 'createdDate is required.'
    },
    isActive: {
        type: Boolean,
        required: true,
        message: 'isActive is required.'
    },
    policies: {
        type: Array,
        required: true,
        message: 'policies is required.'
    }
});

const Workflow = mongoose.model('Workflow', WorkflowSchema);
export default Workflow;