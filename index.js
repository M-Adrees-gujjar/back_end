const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());


let name_value;
let password_value;


app.get('/', function (req, res) {
    res.send('Data Showing');
    console.log('Working');
});

app.post('/post', function (req, res) {
    let result = req.body;
    name_value = result.name;
    password_value = result.password;
    res.send(result);
    main();

});

app.listen(3000, () => console.log('Running at 3000'));





const main = async () => {
    await mongoose.connect("mongodb://localhost:27017");
    const ProductSchema = new mongoose.Schema({
        name: String,
        password: String
    });

    const user = mongoose.model('user', ProductSchema);
    let data = new user({ name: name_value, password: password_value });
    let result = await data.save();
};
