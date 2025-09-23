import mongoose from "mongoose";

export const RegulatingBodySchema = mongoose.Schema({
    regulatingBodyId: {
        type: String,
        required: true,
        message: "regulatingBodyId is required."
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
    }
});

const RegulatingBodyModel = mongoose.model('RegulatingBodyModel', RegulatingBodySchema);

export default RegulatingBodyModel;