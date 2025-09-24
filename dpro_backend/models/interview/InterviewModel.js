import mongoose from "mongoose";

export const InterviewSchema = mongoose.Schema({
    interviewId: {
        type: String,
        required: true,
        message: "interviewId is required."
    },
    analysisId: {
        type: String,
        required: true,
        message: "analysisId is required."
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
    attendeeIds: {
        type: Array,
        required: true,
        message: "attendees is required."
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
    isComplete: {
        type: Boolean,
        required: true,
        message: "isComplete is required."
    },
    isActive: {
        type: Boolean,
        required: true,
        message: "isActive is required."
    },
    assessments: Array,
    reviews: Array
});

const Interview = mongoose.model('Interview', InterviewSchema);

export default Interview;