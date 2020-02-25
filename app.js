const express = require('express');

const parser = require('body-parser').urlencoded({ extended: false });

const jsonParser = require('body-parser').json();

const User = require('./src/User');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.post('/post', parser, async (req, res) => {
    //co 1 post trong db
    const { userID, title, content } = req.body;
    User.addPostById(userID, title, content)
    .then(() => res.send({ message: 'OK' }))
    .catch(err => res.send({ error: err.message }));
    // res.send(userID + title + content);
});

app.post('/user', parser, async (req, res) => {
    const { name } = req.body;
    // const user = new User(req.body);
    const user = new User({ name });
    await user.save();
    res.send({ message: 'OK' });
});

app.post('/cong', jsonParser, (req, res) => {
    const { a, b } = req.body;
    const kq = +a + +b + '';
    if (isNaN(kq)) return res.status(404).send('Tham so khong hop le');
    res.send(kq);
});

app.get('/cong/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const kq = +a + +b + '';
    if (isNaN(kq)) return res.status(404).send('Tham so khong hop le');
    res.send(kq);
});

module.exports = app;
