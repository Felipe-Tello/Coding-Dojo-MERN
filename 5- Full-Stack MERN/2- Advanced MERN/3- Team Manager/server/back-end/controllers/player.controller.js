//importing Player Model
const Player = require("../models/player.model");

//return all players
module.exports.findAllPlayers = (req, res) => {
    Player.find()
        .then(allPlayers => res.json(allPlayers))
        .catch(err => res.status(400).json(err));
};

//return a player by id
module.exports.findOnePlayer = (req, res) => {
    Player.findOne({_id: req.params.id})
        .then(player => res.json(player))
        .catch(err => res.status(400).json(err));
};

//create a player
module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(player => res.json(player))
        .catch(err => res.status(400).json(err));
};

//update a player
// module.exports.updatePlayer = (req, res) => {
//     Player.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true})
//         .then(player => res.json(player))
//         .catch(err => res.status(400).json(err));
// };

//verify the id then update a player
module.exports.updatePlayer = (req, res) => {
    Player.findById({_id: req.params.id})
        .then(player => {
            if (!player) {
                return res.status(404).json({message: "Player not found"});
            }
            Player.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true})
                .then(player => res.json(player))
                .catch(err => res.status(400).json(err));
        })
        .catch(err => res.status(400).json(err));
};

//delete a player
module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
        .then(result => res.json({ result: result }))
        .catch(err => res.status(400).json(err));
};