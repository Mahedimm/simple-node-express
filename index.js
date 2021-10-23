const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;
const users = [
    { id: 0, name: 'mahedi', email: 'mahedi@gmail.com' },
    { id: 1, name: 'hasan', email: 'mahedi@gmail.com' },
    { id: 2, name: 'rakib', email: 'mahedi@gmail.com' },
    { id: 3, name: 'mahi', email: 'mahedi@gmail.com' },
    { id: 4, name: 'lover', email: 'mahedi@gmail.com' },
];

// app.Method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hiting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/contact', (req, res) => {
    res.send('contact me : mahedihasangrand2@gmail.com');
});

app.get('/users', (req, res) => {
    const { search } = req.query;
    if (search) {
        const searchResult = users.filter((user) => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users);
    }
});
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users[id];
    res.send(user);
});
app.get('/about', (req, res) => {
    res.send('I am Mahedi Hasan nodemon');
});
app.listen(port, () => {
    console.log('listening to post', port);
});
