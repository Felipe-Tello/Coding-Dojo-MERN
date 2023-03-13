const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [2, "Name must have at least 2 characters"]
    },
    position: {
        type: String,
        required: [false]
    },
    playing: {
        type:[Number]
    },
    notPlaying: {
        type:[Number]
    },
    undecided: {
        type:[Number],
        default: [1,2,3]
    }
}, {timestamps: true, versionKey: false});

const Player = mongoose.model("players`", PlayerSchema);

module.exports = Player;