import mongoose from "mongoose";

export const ReviewSchema = mongoose.Schema({
    reviewId: {
        type: String,
        required: true,
        message: "reviewId is required."
    },
    interviewDocumentId: {
        type: String,
        required: true,
        message: "interviewId is required."
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
    items: Array,
    decision: {
        type: String,
        required: true,
        message: "reviewDecision is required."
    },
    createdDate: {
        type: Date,
        required: true,
        message: "reviewCreatedDate is required."
    },
    completedDate: {
        type: Date,
        required: true,
        message: "reviewCompletedDate is required."
    },
    status: {
        type: String,
        required: true,
        message: "reviewStatus is required."
    },
    isActive: {
        type: Boolean,
        required: true,
        message: "reviewIsActive is required."
    }
});

const Review = mongoose.model('Review', ReviewSchema);

export default Review;