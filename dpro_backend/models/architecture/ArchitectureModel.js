import mongoose from "mongoose";

export const ArchitectureSchema = mongoose.Schema({
    architectureId: {
        type: String,
        required: true,
        message: "architectureId is required."
    },
    businessId: String,
    description: {
        type: String,
        required: true,
        message: "description is required."
    },
    techStack: {
        type: Array,
        required: true,
        message: "techStack is required."
    },
    cloudPlatforms: {
        type: Array,
        required: true,
        message: "createdDate is required."
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
    dataflows: Array
});

const Architecture = mongoose.model('Architecture', ArchitectureSchema);

export default Architecture;