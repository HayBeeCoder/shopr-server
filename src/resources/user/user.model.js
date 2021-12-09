import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique : true,
            trim: true
        },
        password: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            default: false
        }
    },

)

export const User = mongoose.model("user" , UserSchema)