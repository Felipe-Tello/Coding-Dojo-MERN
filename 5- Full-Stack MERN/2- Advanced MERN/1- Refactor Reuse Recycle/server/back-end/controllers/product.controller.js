//importing Product Model
const Product = require("../models/product.model");

//return all products
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.status(400).json(err));
};

//return a product by id
module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err));
};

//create a product
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err));
};

//update a product
// module.exports.updateProduct = (req, res) => {
//     Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true})
//         .then(product => res.json(product))
//         .catch(err => res.status(400).json(err));
// };

//verify the id then update a product
module.exports.updateProduct = (req, res) => {
    Product.findById({_id: req.params.id})
        .then(product => {
            if (!product) {
                return res.status(404).json({message: "Product not found"});
            }
            Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true})
                .then(product => res.json(product))
                .catch(err => res.status(400).json(err));
        })
        .catch(err => res.status(400).json(err));
};

//delete a product
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(result => res.json({ result: result }))
        .catch(err => res.status(400).json(err));
};