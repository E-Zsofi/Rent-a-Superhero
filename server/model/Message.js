import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const messageSchema = new Schema({
  name: String,
  phoneNumber: Number,
  email: String,
  message: String,
}, { collection: 'messages' });

const Message = model('Message', messageSchema);
export default Message;