import mongoose from "mongoose";

export const FrameworkSchema = mongoose.Schema({
    frameworkId: {
        type: String,
        required: true,
        message: "frameworkId is required."
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
    frameworkType: {
        type: String,
        required: true,
        message: "frameworkType is required."
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

const Framework = mongoose.model('Framework', FrameworkSchema);

export default Framework;