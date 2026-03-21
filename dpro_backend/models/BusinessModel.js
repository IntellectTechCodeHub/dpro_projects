import mongoose from "mongoose";

export const BusinessSchema = mongoose.Schema({
    businessId: {
        type: String,
        required: true,
        message: 'businessId is required.'
    },
    businessName: {
        type: String,
        required: true,
        message: 'businessName is required.'
    },
    businessDescription: {
        type: String,
        required: true,
        message: 'businessDescription is required.'
    },
    businessPhone: {
        type: String,
        required: true,
        message: 'businessPhone is required.'
    },
    businessCity: {
        type: String,
        required: true,
        message: 'businessCity is required.'
    },
    businessState: {
        type: String,
        required: true,
        message: 'businessState is required.'
    },    
    businessCreatedDate: {
        type: Date,
        required: true,
        message: 'businessCreatedDate is required.'
    },
    businessIsActive: {
        type: Boolean,
        required: true,
        message: 'businessIsActive is required.'
    },
    businessInfoProtection: {
        type: String,
        required: true,
        message: 'businessInfoProtection is required.'
    },
    businessIndustry: {
        type: String,
        required: true,
        message: 'businessIndustry is required.'
    },
    workflows: Array,
    taxonomy: Object,
    architectures: Array,
    useCases: Array,
});

const Business = mongoose.model('Business', BusinessSchema);
export default Business;