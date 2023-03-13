const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name must have at least 3 characters"]
    }
}, {timestamps: true, versionKey: false});

const Author = mongoose.model("authors", AuthorSchema);

module.exports = Author;