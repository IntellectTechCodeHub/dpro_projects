import mongoose from "mongoose";

export const PolicySchema = mongoose.Schema({
    policyId: {
        type: String,
        required: true,
        message: "policyId is required."
    },
    governanceId: String,
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
    policyType: {
        type: String,
        required: true,
        message: "policyType is required."
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
    regulatingBodyId: {
        type: String,
        required: true,
        message: "regulatingBodyId is required."
    },
    regulationId: {
        type: String,
        required: true,
        message: "regulationId is required."
    }
});

const PolicyModel = mongoose.model('PolicyModel', PolicySchema);

export default PolicyModel;