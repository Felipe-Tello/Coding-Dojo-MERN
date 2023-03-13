const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

mongoose.connect('mongodb://0.0.0.0:27017/generalDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected with DB'))
    .catch(err => console.log('Error connecting with DB'+ err));