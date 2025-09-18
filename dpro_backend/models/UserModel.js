import mongoose from "mongoose";

export const UserSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
        message: 'userId is required.'
    },
    name: {
        type: String,
        required: true,
        message: 'name is required.'
    },
    email: {
        type: String,
        required: true,
        message: 'email is required.'
    },
    password: {
        type: String,
        required: true,
        message: 'password is required.'
    },
    phone: {
        type: String,
        required: true,
        message: 'phone number is required.'
    },
    isActive: {
        type: Boolean,
        required: true,
        message: 'isActive is required.'
    }
});

const User = mongoose.model('User', UserSchema);
export default User;