import { Schema, model } from "mongoose";

const MessageSchema = new Schema({
    message: {
        text: { type: String, required: true }
    },
    users: [],
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
},{ timestamps: true });

const messageModel = model("Messages", MessageSchema);

export default messageModel;