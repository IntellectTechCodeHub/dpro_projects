import mongoose from "mongoose";

export const RegulationSchema = mongoose.Schema({
    regulationId: {
        type: String,
        required: true,
        message: 'regulationId is required.'
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
    regulatingBodyId: {
        type: String,
        required: true,
        message: "regulatingBodyId is required."
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

const RegulationModel = mongoose.model('Regulation', RegulationSchema);

export default RegulationModel;