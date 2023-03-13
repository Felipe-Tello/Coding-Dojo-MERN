//importing Joke Model
const Joke = require('../models/joke.model')

//return all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: "There was an error " + err }));
};

//return a joke by id
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(joke => res.json({ joke: joke }))
        .catch(err => res.json({ message: "There was an error " + err }));
};

//return a random joke
module.exports.getRandomJoke = async (req, res) => {
    try {
        const count = await Joke.countDocuments();
        const randomNum = Math.floor(Math.random() * count);
        const randomObject = await Joke.findOne().skip(randomNum);
        res.send(randomObject);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

//create a joke
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(joke => res.json({ joke: joke }))
        .catch(err => res.json({ message: "There was an error " + err }));
};

//update a joke
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(joke => res.json({ joke: joke }))
        .catch(err => res.json({ message: "There was an error " + err }));
};

//delete a joke
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(joke => res.json({ result: result }))
        .catch(err => res.json({ message: "There was an error " + err }));
};