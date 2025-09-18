import mongoose from "mongoose";

export const WorkflowSchema = mongoose.Schema({
    workflowId: {
        type: String,
        required: true,
        message: 'workflowId is required.'
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
    policies: {
        type: Array,
        required: true,
        message: 'policies is required.'
    }
    [
        {
            policyId: {
                type: String,
                required: true,
                message: 'policyId is required.'
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
            actors: {
                type: Array,
                required: true,
                message: 'actors is required.'
            }
            [
                {
                    actorId: {
                        type: String,
                        required: true,
                        message: 'actorId is required.'
                    },
                    type: {
                        type: String,
                        required: true,
                        message: 'type is required.'
                    },
                    userId: {
                        type: String,
                        required: true,
                        message: 'userId is required.'
                    },
                    employer: {
                        type: String,
                        required: true,
                        message: 'employer is required.'
                    },
                    group: {
                        type: String,
                        required: true,
                        message: 'group is required.'
                    }
                }
            ],
            createdDate: {
                type: Date,
                required: true,
                message: 'createdDate is required.'
            },
            isActive: {
                type: Boolean,
                required: true,
                message: 'isActive is required.'
            }  
        }
    ]
});

const Workflow = mongoose.model('Workflow', WorkflowSchema);
export default Workflow;