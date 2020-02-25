const assert = require('assert');
const User = require('../../src/User');

describe('Create user', async () => {
    it('Can create new user without posts', async () => {
        const user = new User({ name: 'Teo' });
        await user.save();
        const user2 = await User.findOne({});
        assert(user2.name === 'Teo')
    });

    it('Can create new user with posts', async () => {
        const user = new User({
            name: 'Cuc',
            posts: [
                {
                    title: 'javascript is awsome',
                    content: 'Nodejs AnhTuanIT'
                },
                {
                    title: 'javascript',
                    content: 'Kim Cuc'
                }
            ]
        });
        await user.save();
        const user2 = await User.findOne({});
        assert(user2.posts[0].title === 'javascript is awsome');
    });
});
