import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const heroSchema = new Schema({
  name: String,
  description: String,
  pictureUrl: String,
  abilities: [String],
  gender: String,
  status: String,
  heroType: String,
  rating: String,
  price: Number,
}, { collection: 'heroes' });

const Hero = model('Hero', heroSchema);
export default Hero;


