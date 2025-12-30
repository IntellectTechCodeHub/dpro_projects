import mongoose from "mongoose";


export const IntakeSchema = mongoose.Schema({
    intakeRequestId: {
        type: String,
        required: true,
        message: "intakeRequest is required."
    },
    type: {
        type: String,
        required: true,
        message: "intakeType is required."
    },
    contact: {
        type: String,
        required: true,
        message: "intakeMeetings is required."
    },
    phone: {
        type: String,
        required: true,
        message: "intakePhone is required."
    },
    availability: {
        type: Date,
        required: true,
        message: "intakeAvailability is required."
    },
    privacy: {
        type: Boolean,
        required: true,
        message: "intakePrivacy is required."
    },
    createdDate: {
        type: Date,
        required: true,
        message: "intakeCreatedDate is required."
    },
    completedDate: {
        type: Date,
        required: true,
        message: "intakeCompletedDate is required."
    },
    status: {
        type: String,
        required: true,
        message: "intakeStatus is required."
    },
    isActive:{
        type: Boolean,
        required: true,
        message: "intakeIsActive is required."
    }
});

const Intake = mongoose.model('Intake', IntakeSchema);
export default Intake;