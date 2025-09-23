import mongoose from "mongoose";

export const ComplianceReviewSchema = mongoose.Schema({
    reviewId: {
        type: String,
        required: true,
        message: "reviewId is required."
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

const ComplianceReview = mongoose.model('ComplianceReview', ComplianceReviewSchema);

export default ComplianceReview;