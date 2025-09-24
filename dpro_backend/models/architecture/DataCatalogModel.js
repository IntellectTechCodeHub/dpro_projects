import mongoose from "mongoose";

export const DataCatalogSchema = mongoose.Schema({
    catalogId: {
        type: String,
        required: true,
        message: "catalogId is required."
    },
    name: {
        type: String,
        required: true,
        message: "name is required."
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
    dictionaries: Array
});

const DataCatalog = mongoose.model('Data Catalog', DataCatalogSchema);

export default DataCatalog;