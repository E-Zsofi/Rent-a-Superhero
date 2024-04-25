import mongoose from 'mongoose';
import express from 'express';
import Hero from "./model/Hero.js";
import User from "./model/User.js"
import Message from "./model/Message.js"
import Cart from './model/Cart.js';

const app = express();
app.use(express.json());

async function main() {
  await mongoose.connect('mongodb+srv://bencematuz1:Hero12345@rentahero.rvghajp.mongodb.net/Superheros');

  app.get("/api/hero", async (req, res) => {
    const allHeroes = await Hero.find();
    res.json(allHeroes);
  })

  app.get("/api/edit/:id", async (req, res) => {
    const hero = await Hero.findById(req.params.id);
    res.json(hero);
  })

  app.get("/api/shop", async (req, res) => {
    const allHeroes = await Hero.find();
    res.json(allHeroes);
  })

  app.get("/api/cart", async (req, res) => {
    const cartHeroes = await Cart.find({});
    res.json(cartHeroes);
  })


  app.get("/api/messages", async (req, res) => {
    const allMessage = await Message.find();
    res.json(allMessage);
  })

  app.post("/api/user", async (req, res, next) => {
    try {
      const username = req.body.signupUsername;
      const email = req.body.signupEmail;

      const user = new User({
        username,
        email,
      })
      const createdUser = await user.save();
      res.json(createdUser);

    } catch (err) {
      return next(err);
    }
  })


  app.post("/api/cart", async (req, res) => {
    try {
      const name = req.body.name;
      const price = req.body.price;
      const pictureUrl = req.body.pictureUrl;
      console.log(req.body)

      const cartHero = new Cart({
        name,
        price,
        pictureUrl
      })
      console.log(cartHero)
      const createdCartHero = await cartHero.save();
      res.json(createdCartHero)
    } catch (error) {
      console.error(error);
    }
  })


  app.post("/api/hero", async (req, res, next) => {
    try {
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
    catch (err) {
      return next(err);
    }
  })

  app.post("/api/message", async (req, res, next) => {
    try {
      const name = req.body.name;
      const phoneNumber = req.body.phoneNumber;
      const email = req.body.email;
      const message = req.body.message;

      const userMessage = new Message({
        name,
        phoneNumber,
        email,
        message,
      })
      const sentMessage = await userMessage.save();
      res.json(sentMessage);
    }
    catch (err) {
      return next(err);
    }
  })

  app.patch("/api/hero/:id", async (req, res, next) => {
    try {
      const updatedHero = await Hero.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
      res.json(updatedHero)
    }
    catch (err) {
      return next(err);
    }
  })

  app.delete("/api/hero/:name", async (req, res, next) => {
    try {
      console.log(req.params.name)
      const hero = await Hero.findOneAndDelete({ name: req.params.name });
      console.log(`Hero deleted succesfully:`, hero)
    } catch (err) {
      return next(err)
    }
  })






  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}
main();
