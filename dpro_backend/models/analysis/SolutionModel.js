import mongoose from "mongoose";

export const SolutionSchema = mongoose.Schema({
            solutionId: {
                type: String,
                required: true,
                message: 'solutionId is required.'
            },
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
            items: 
            [
                {
                    itemId: String,
                    name: String,
                    type: String,
                    relatedItemIds: Array,
                    createdDate: Date,
                    completedDate: Date,
                    isComplete: Boolean,
                    isActive: Boolean
                }
            ],
            createdDate: {
                type: Date,
                required: true,
                message: 'createdDate is required.'
            },
            completedDate: {
                type: Date,
                required: true,
                message: 'completedDate is required.'
            },
            isComplete: {
                type: Boolean,
                required: true,
                message: 'isComplete is required.'
            },
            isActive: {
                type: Boolean,
                required: true,
                message: 'isActive is required.'
            }
});

// SolutionSchema.path("items").validate((item) => {
//     return item !== undefined;
// })