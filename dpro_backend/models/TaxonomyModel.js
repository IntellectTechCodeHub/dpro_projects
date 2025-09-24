import mongoose from "mongoose";

export const TaxonomySchema = mongoose.Schema({
    taxonomyId: {
        type: String,
        required: true,
        message: "taxoonomy is required."
    },
    name: {
        type: String,
        required: true,
        message: 'name is required.'
    },
    semantics: {
        type: Array,
        required: true,
        message: 'semantics is required.'
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

const Taxonomy = mongoose.model('Taxonomy', TaxonomySchema);

export default Taxonomy;