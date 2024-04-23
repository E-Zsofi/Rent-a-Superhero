import mongoose from 'mongoose';
import express from 'express';
import Hero from "./model/Hero.js";

const app = express();
app.use(express.json());



async function main() {
  await mongoose.connect('mongodb+srv://bencematuz1:Hero12345@rentahero.rvghajp.mongodb.net/Superheros');
  // findHeroById();
  app.get("/api/hero", async (req, res) => {
    const allHeroes = await Hero.find({});
    res.json(allHeroes);
  })

  app.get("/api/edit/:id", async (req, res) => {
    const hero = await Hero.findById(req.params.id);
    res.json(hero);
  })
  
  app.get("/api/shop", async (req, res) => {
    const allHeroes = await Hero.find({});
    res.json(allHeroes);
  })

  app.post("/api/hero", async (req, res) => {
    try{
      const name = req.body.name;
      const description = req.body.description;
      const pictureUrl = req.body.pictureUrl;
      const abilities = req.body.abilities;
      const gender = req.body.gender;
      const status = req.body.status;
      const heroType = req.body.heroType;
      const rating = req.body.rating;
      const price = req.body.price;
      const hero = new Hero({
        name,
        description,
        pictureUrl,
        abilities,
        gender,
        status,
        heroType,
        rating,
        price
      })
      const createdHero = await hero.save();
      res.json(createdHero);
    }
    catch (error) {
      console.error(error);
    }
  })

  app.patch("/api/hero/:id", async (req, res) => {
    try {
      const updatedHero = await Hero.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});
      res.json(updatedHero)
    }
    catch (error) {
      console.error(error)
    }
  })
  



  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}
main();
