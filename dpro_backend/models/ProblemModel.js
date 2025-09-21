import mongoose from "mongoose";

export const ProblemSchema = mongoose.Schema({
            problemId: {
                type: String,
                required: true,
                message: 'problemId is required.'
            },
            analysisId: {
                type: String,
                required: true,
                message: 'analysisId is required.' 
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
            suggestions: {
                type: Array,
                required: true,
                message: 'suggestions is required.'
            },
            createdDate: {
                type: Date,
                required: true,
                message: 'createdDate is required.'
            },
            isResolved: {
                type: Boolean,
                required: true,
                message: 'isResolved is required.'
            },
            isActive: {
                type: Boolean,
                required: true,
                message: 'isActive is required.'
            }
});

const Problem = mongoose.model('Problem', ProblemSchema);

export default Problem;