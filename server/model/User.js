import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: String,
    email: String,
}, { collection: 'users'});

const User = model('user', userSchema);

export default User;