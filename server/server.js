import mongoose from 'mongoose';
import express from 'express';
import Hero from "./model/Hero.js";

mongoose.connect('mongodb+srv://bencematuz1:Hero12345@rentahero.rvghajp.mongodb.net/');

const app = express();
app.use(express.json());

// const ironmanId = '661525c29d804c1c85e953a6'

// async function findHero() {
//   const hero = await Hero.findOne({name: 'Iron Man'});
//   console.log(hero);
// }
// findHero();


async function findBookById() {
  try {
    const hero = await Hero.findById('661525c29d804c1c85e953a6');
    console.log(hero);
  } catch (error) {
      console.error(error);
  }
}
findBookById();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});