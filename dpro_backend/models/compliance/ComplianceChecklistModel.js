import mongoose from "mongoose";

export const ComplianceChecklistSchema = mongoose.Schema({
    checklistId: {
        type: String,
        required: true,
        message: "checklistId is required."
    },
    name: {
        type: String,
        required: true,
        message: "name is required."
    },
    description: {
        type: String,
        required: true,
        message: "description is required."
    },
    items: {
        type: Array,
        required: true,
        message: "items is required."
    },
    createdDate: {
        type: Date,
        required: true,
        message: "createdDate is required."
    },
    completedDate: {
        type: Date,
        required: true,
        message: "completedDate is required."
    },
    status: {
        type: String,
        required: true,
        message: "status is required."
    },
    isActive: {
        type: Boolean,
        required: true,
        message: "isActive is required."
    }
});

const ComplianceChecklist = mongoose.model('ComplianceChecklist', ComplianceChecklistSchema);

export default ComplianceChecklist;