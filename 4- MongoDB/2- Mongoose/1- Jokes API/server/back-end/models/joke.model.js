const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    setup:String,
    punchLine:String,
}, {timestamps:true, versionKey:false});

const Joke = mongoose.model("jokes", JokeSchema);

//export Joke Object
module.exports = Joke;