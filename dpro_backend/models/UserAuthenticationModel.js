import { mongoose } from "mongoose";
export const UserAuthenticationSchema = mongoose.Schema({
    userAuthenticationId: {
        type: String,
        required: true,
        message: 'userAuthenticationId is required.'

    },
    userDocumentId: {
        type: String,
        required: true,
        message: ' userDocumentId is required. '
    },
    userAuthenticated: {
        type: Boolean,
        required: true,
        message: ' userAuthenticated is required.'
    },
    userAuthenticationCreatedDate: {
        type: Date,
        required: true,
        message: 'userAuthenticationCreatedDate is required.'
    },
    userAuthenticationIsActive: {
        type: Boolean,
        required: true,
        message: 'userAuthenticationIsActive is required.'
    }
});

const UserAuthentication = mongoose.model('UserAuthentication', UserAuthenticationSchema);
export default UserAuthentication;