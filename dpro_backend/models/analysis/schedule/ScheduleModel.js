import mongoose from "mongoose";

export const ScheduleSchema = mongoose.Schema({
    interviewScheduleId: {
        type: String,
        required: true,
        message: "interviewScheduleId is required."
    },
    interviewDocumentId: {
        type: String,
        required: true,
        message: "interviewDocumentId is required."
    },
    interviewSchedules: Array,
    interviewScheduleIsActive: {
        type: Boolean,
        required: true,
        message: "interviewScheduleIsActive is required."
    }
});

const Schedule = mongoose.model('Schedule', ScheduleSchema);
export default Schedule;