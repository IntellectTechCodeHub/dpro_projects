import mongoose from "mongoose";

export const InterviewSchema = mongoose.Schema({
    interviewId: {
        type: String,
        required: true,
        message: "interviewId is required."
    },
    analysisDocumentId: {
        type: String,
        required: true,
        message: "analysisDocumentId is required."
    },
    name: {
        type: String,
        required: true,
        message: "interviewName is required."
    },
    description: {
        type: String,
        required: true,
        message: "interviewDescription is required."
    },
    attendeeIds: {
        type: Array,
        required: true,
        message: "attendees is required."
    }, 
    createdDate: {
        type: Date,
        required: true,
        message: "interviewCreatedDate is required."
    },
    completedDate: {
        type: Date,
        required: true,
        message: "completedDate is required."
    },
    isComplete: {
        type: Boolean,
        required: true,
        message: "interviewIsComplete is required."
    },
    isActive: {
        type: Boolean,
        required: true,
        message: "interviewIsActive is required."
    },
    assessments: Array,
    reviews: Array
});

const Interview = mongoose.model('Interview', InterviewSchema);

export default Interview;