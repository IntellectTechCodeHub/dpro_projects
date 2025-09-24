import mongoose from "mongoose";

export const DataSourceSchema = mongoose.Schema({
    dataSourceId: {
        type: String,
        required: true,
        message: "dataSourceId is required."
    },
    name: {
        type: String,
        required: true,
        message: "name is required."
    },
    dataLineage: {
        type: String,
        required: true,
        message: "dataLineage is required."
    },
    dataStorage: {
        type: String,
        required: true,
        message: "dataStorage is required."
    },
    fileType: {
        type: String,
        required: true,
        message: "fileType is required."
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
    dataFlowId: String,
    models: Array
});

const DataSource = mongoose.model('Data Source', DataSourceSchema);

export default DataSource;