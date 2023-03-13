//importing Author Model
const Author = require("../models/author.model");

//return all authors
module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.status(400).json(err));
};

//return a author by id
module.exports.findOneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
};

//create a author
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
};

//update a author
module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true})
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
};

//delete a author
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(result => res.json({ result: result }))
        .catch(err => res.status(400).json(err));
};