const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    password: String
});

const user = mongoose.model('user', ProductSchema);

const main = async (name_value, password_value) => {
    await mongoose.connect("mongodb+srv://adrees:adrees123@cluster0.l5nuqsf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    // await mongoose.connect("mongodb://localhost:27017");
    let data = new user({ name: name_value, password: password_value });
    await data.save();
};

const get_main = async () => {
    // await mongoose.connect("mongodb://localhost:27017");
    await mongoose.connect("mongodb+srv://adrees:adrees123@cluster0.l5nuqsf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    const find_result = await user.find({});
    return find_result;
}

const item_delete = async (item_res) => {
    await mongoose.connect("mongodb+srv://adrees:adrees123@cluster0.l5nuqsf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    // await mongoose.connect("mongodb://localhost:27017");
    await user.findOneAndDelete({ _id: item_res });
    return 'Deleted';
}
const item_remove = async () => {
    await mongoose.connect("mongodb+srv://adrees:adrees123@cluster0.l5nuqsf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    // await mongoose.connect("mongodb://localhost:27017");
    await user.deleteMany({});
    return 'Removed';
}


const update_item = async (update_item_data) => {
    await mongoose.connect("mongodb+srv://adrees:adrees123@cluster0.l5nuqsf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    // await mongoose.connect("mongodb://localhost:27017");
    await user.findOneAndUpdate({ _id: update_item_data.item }, { name: update_item_data.name, password: update_item_data.password });
    return 'Updated';
}




module.exports = { main, get_main, item_delete, update_item , item_remove };
