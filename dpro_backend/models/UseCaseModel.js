import mongoose from "mongoose";

export const UseCaseSchema = mongoose.Schema({
    useCaseId: {
        type: String,
        required: true,
        message: 'useCaseId is required.'
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
    createdDate: {
        type: Date,
        required: true,
        message: "createdDate is required."
    },
    isActive: {
        type: Boolean,
        required: true,
        message: "isActive is required."
    },
    stakeholders: {
        type: Array,
        required: true,
        message: "stakeholders is required."
    },
    governances: Array,
    compliances: Array
});

const UseCase = mongoose.model('UseCase', UseCaseSchema);

export default UseCase;