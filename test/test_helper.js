const mongoose = require('mongoose');

beforeEach('Start database', (done) => {
    mongoose.connect('mongodb://localhost/shop', { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.once('open', () => done());
})

beforeEach('Clear database', (done) => {
    mongoose.connection.db.dropDatabase().then(() => done());
});

// User -> Post -> Comment
/*
[{
    name: 'Teo',
    posts: [
        { 
            title: 'abc', 
            content: 'yyy',
            comments: [
                { content: '', userId }
            ]
        }
    ]
}]
[{
    name: 'Teo',
    posts: [id1, id2, ...]
}]
[{
    content: '',
    title: '',
    comments: [id1, id2, ...]
}]
[{
    content: '',
    user: idUser
}]
*/