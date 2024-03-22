const { main, get_main, item_delete, update_item , item_remove} = require('./server');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.get('/get', function (req, res) {
    (async () => {
        let get_data = await get_main();
        res.send(get_data);
    })();
});

app.post('/post', function (req, res) {
    let result = req.body;
    name_value = result.name;
    password_value = result.password;
    res.send(result);
    main(name_value, password_value);
});

app.delete('/delete', function (req, res) {
    let item_res = req.body.item;
    (async () => {
        await item_delete(item_res);
    })();
    res.send('Deleted');
})
app.delete('/remove', function (req, res) {
    (async () => {
        await item_remove();
    })();
    res.send('Removed');
})

app.put('/put', function (req, res) {

    let update_item_data = req.body;
    update_item(update_item_data);
    res.send('Updated');
})

app.listen(3000, () => console.log('Running at 3000'));


