import mongoose from "mongoose";

export const BusinessSchema = mongoose.Schema({
    businessId: {
        type: String,
        required: true,
        message: 'businessId is required.'
    },
    name: {
        type: String,
        required: true,
        message: 'name is required.'
    },
    description: {
        type: String,
        required: true,
        message: 'description is required.'
    },
    createdDate: {
        type: Date,
        required: true,
        message: 'createdDate is required.'
    },
    isActive: {
        type: Boolean,
        required: true,
        message: 'isActive is required.'
    },
    industries: {
        type: Array,
        required: true,
        message: 'industries is required.'
    },
    workflows: Array,
    taxonomy: Object,
    architectures: Array,
    useCases: Array,
});

const Business = mongoose.model('Business', BusinessSchema);
export default Business;