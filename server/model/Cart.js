import mongoose from "mongoose";

const { Schema, model } = mongoose;

const cartSchema = new Schema({
    name: String,
    price: Number,
    pictureUrl: String,
}, { collection: 'cartElements'});

const Cart = model('cart', cartSchema);

export default Cart;