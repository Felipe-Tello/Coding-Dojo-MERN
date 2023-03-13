const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Name is required"],
        minLength: [2, "Name must have at least 2 characters"]
    },
    price: {
        type: Number
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [5, "Description must have at least 5 characters"]
    }
}, {timestamps: true, versionKey: false});

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;