import mongoose from "mongoose";

export const DataFlowSchema = mongoose.Schema({
    dataFlowId: {
        type: String,
        required: true,
        message: "dataFlowId is required."
    },
    architectureId: {
        type: String,
        required: true,
        message: "architectureId is required."
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
    stages: Array,
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
    catalogs: Array,
    sources: Array
});

const DataFlow = mongoose.model('Data Flow', DataFlowSchema);

export default DataFlow;