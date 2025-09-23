import mongoose from "mongoose";

export const ReviewSchema = mongoose.Schema({
    reviewId: {
        type: String,
        required: true,
        message: "reviewId is required."
    },
    interviewId: {
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

const Review = mongoose.model('Review', ReviewSchema);

export default Review;