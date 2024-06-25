
import { Schema, model } from "mongoose";

// schema
const userSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    wishlist: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});
const User = model("User", userSchema);

export default User;