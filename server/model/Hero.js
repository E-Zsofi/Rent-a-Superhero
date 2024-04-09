import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const heroSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  pictureUrl: String,
  abilities: [String],
}, { collection: 'heroes' });

const Hero = model('Hero', heroSchema);
export default Hero;


