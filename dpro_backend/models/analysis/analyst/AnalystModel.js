import mongoose from "mongoose";

export const AnalystSchema = mongoose.Schema({
    analystId:{
        type: String,
        required: true,
        message: "analystId is required."
    },
    userDocumentId:{
        type: String,
        required: true,
        message: "analystUserDocumentId is required."
    },
    analysisDocumentId: {
        type: String,
        required: true,
        message: "analysisDocumentId is required."
    },
    name: {
        type: String,
        required: true,
        message: "analystName is required."
    },
    email: {
        type: String,
        required: true,
        message: "analystEmail is required."
    },
    phone: {
        type: String,
        required: true,
        message: "analystPhone is required."
    },
    role: {
        type: String,
        required: true,
        message: "analystRole is required."
    },
    availability: {
        type: Array,
        required: true,
        message: "analystAvailability is required."
    },
    industry: {
        type: String,
        required: true,
        message: "analystIndustry is requird."
    },
    dateAdded: {
        type: Date,
        required: true,
        message: "analystDateAdded is required."
    },
    isActive: {
        type: Boolean,
        required: true,
        message: "analystIsActive is required."
    }
});

const Analyst = mongoose.model('Analyst', AnalystSchema);
export default Analyst;