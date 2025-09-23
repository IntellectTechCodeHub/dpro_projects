import mongoose from "mongoose";

export const GovernanceSchema = mongoose.Schema({
    governanceId: { 
        type: String,
        required: true,
        message: "governanceId is required."
    },
    useCaseId: {
        type: String,
        required: true,
        message: "useCaseId is required."
    },
    name: {
        type: String,
        required: true,
        message: "name is required."
    },
    country: {
        type: String,
        required: true,
        message: "country is required."
    },
    state: {
        type: String,
        required: true,
        message: "state is required."
    },
    city: {
        type: String,
        required: true,
        message: "city is required."
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
    policies: Array
});

const GovernanceModel = mongoose.model('GovernanceModel', GovernanceSchema);

export default GovernanceModel;