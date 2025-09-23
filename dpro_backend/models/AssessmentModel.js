import mongoose from "mongoose";

export const AssessmentSchema = mongoose.Schema({
    assessmentId: {
        type: String,
        required: true,
        message: "assessmentId is required."
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
    questions: {
        type: Array,
        required: true,
        message: "questions is required."
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

const Assessment = mongoose.model('Assessment', AssessmentSchema);

export default Assessment;