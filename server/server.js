import mongoose from 'mongoose';
import express from 'express';
import Hero from "./model/Hero.js";

const app = express();
app.use(express.json());


async function findHero() {
  try {
    const hero = await Hero.find({ id: 21 });
    console.log(hero);
  } catch (error) {
    console.error(error);
  }
}




async function main() {
  await mongoose.connect('mongodb+srv://bencematuz1:Hero12345@rentahero.rvghajp.mongodb.net/Superheros');
  findHero();


  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}
main();
