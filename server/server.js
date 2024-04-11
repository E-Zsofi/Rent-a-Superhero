import mongoose from 'mongoose';
import express from 'express';
import Hero from "./model/Hero.js";
import User from "./model/User.js"

const app = express();
app.use(express.json());


// async function findHeroById() {
//   try {
//     const hero = await Hero.find({ name: 'Iron Man' });
//     console.log(hero);
//   } catch (error) {
//     console.error(error);
//   }
// }


async function main() {
  await mongoose.connect('mongodb+srv://bencematuz1:Hero12345@rentahero.rvghajp.mongodb.net/Superheros');
  // findHeroById();
  app.get("/api/hero", async (req, res) => {
    const allHeroes = await Hero.find({});
    res.json(allHeroes);
  })
  
  app.get("/api/shop", async (req, res) => {
    const allHeroes = await Hero.find({});
    res.json(allHeroes);
  })

  app.post("/api/user", async (req, res) => {
    try {
      const username = req.body.signupUsername;
      const email = req.body.signupEmail;
  
      const user = new User({
        username,
        email,
      })
      const createdUser = await user.save();
      res.json(createdUser);
      
    } catch (error) {
      console.error(error);
    }
  })

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}
main();
